/* Live treasury data, read straight from Solana in the visitor's browser (no server, no key).
   window.LIVE resolves to:
   { sol, usdc, claims:[{date,sol,tx}], swaps:[{date,sol,usdc,tx}], payments:[{date,usdc,memo,tx}],
     transfers:[{date,dir,sol,tx}], feesSol, updated }  — or null if the RPC can't be reached.
   Cached in localStorage for 2 minutes so page views don't hammer the public RPC. */
(function () {
  const RPCS = ["https://solana-rpc.publicnode.com"];
  const USDC = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  const PUMP = ["6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P", "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA"]; // pump.fun + PumpSwap
  const JUP = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNx9DtCaV";
  const MEMO = ["MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr", "Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo"];
  const WALLET = (typeof CONFIG !== "undefined" && CONFIG.wallets && CONFIG.wallets.treasury) || "";
  const KEY = "treat-live-v1:" + WALLET, TTL = 120e3, MAX_TX = 60;

  async function rpc(method, params) {
    let last;
    for (const url of RPCS) {
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }) });
          if (r.status === 429) { await new Promise(s => setTimeout(s, 600 * (attempt + 1))); continue; }
          const j = await r.json(); if (j.error) throw new Error(j.error.message); return j.result;
        } catch (e) { last = e; await new Promise(s => setTimeout(s, 300)); }
      }
    }
    throw last || new Error("rpc failed");
  }
  const day = ts => ts ? new Date(ts * 1000).toISOString().slice(0, 10) : "";
  const keyOf = k => typeof k === "string" ? k : k.pubkey;
  const usdcOf = (bals, owner) => (bals || []).filter(b => b.mint === USDC && b.owner === owner).reduce((a, b) => a + (+b.uiTokenAmount.uiAmountString || 0), 0);

  function classify(sig, tx) {
    const msg = tx.transaction.message, keys = msg.accountKeys.map(keyOf), i = keys.indexOf(WALLET), meta = tx.meta;
    if (i < 0 || meta.err) return null;
    const progs = new Set([...msg.instructions, ...(meta.innerInstructions || []).flatMap(x => x.instructions)].map(ix => ix.programId));
    const feePaid = i === 0 ? meta.fee : 0;
    const dSol = (meta.postBalances[i] - meta.preBalances[i] + feePaid) / 1e9;
    const dUsdc = usdcOf(meta.postTokenBalances, WALLET) - usdcOf(meta.preTokenBalances, WALLET);
    const logs = (meta.logMessages || []).join("\n");
    const date = day(tx.blockTime), link = "https://solscan.io/tx/" + sig;
    if (PUMP.some(p => progs.has(p)) && dSol > 0 && /CreatorFee|creator_fee|DistributeCreatorFees|CollectCreatorFee/i.test(logs))
      return { kind: "claim", date, sol: dSol, tx: link };
    if (progs.has(JUP) || (dUsdc > 0 && dSol < 0)) return { kind: "swap", date, sol: -dSol, usdc: dUsdc, tx: link };
    if (dUsdc < 0) {
      const memoIx = msg.instructions.find(ix => MEMO.includes(ix.programId));
      const memo = memoIx ? (memoIx.parsed || "") : ((logs.match(/Memo \(len \d+\): "([^"]*)"/) || [])[1] || "");
      return { kind: "payment", date, usdc: -dUsdc, memo: String(memo), tx: link };
    }
    if (Math.abs(dSol) > 0.000001) return { kind: "transfer", date, dir: dSol > 0 ? "in" : "out", sol: Math.abs(dSol), tx: link };
    return null;
  }

  async function load() {
    if (!WALLET) return null;
    try { const c = JSON.parse(localStorage.getItem(KEY) || "null"); if (c && Date.now() - c.at < TTL) return c.data; } catch (e) {}
    const [bal, sigs] = await Promise.all([rpc("getBalance", [WALLET]), rpc("getSignaturesForAddress", [WALLET, { limit: MAX_TX }])]);
    // USDC balance = the wallet's USDC after its most recent transaction (token-account lookups need a paid RPC token)
    const out = { sol: bal.value / 1e9, usdc: 0, claims: [], swaps: [], payments: [], transfers: [], updated: new Date().toISOString() };
    let usdcSet = false;
    // fetch transactions a few at a time (public RPC is rate-limited)
    const ok = sigs.filter(s => !s.err);
    for (let j = 0; j < ok.length; j += 4) {
      const batch = await Promise.all(ok.slice(j, j + 4).map(s => rpc("getTransaction", [s.signature, { encoding: "jsonParsed", maxSupportedTransactionVersion: 0 }]).then(tx => {
        if (!tx) return null;
        if (!usdcSet && j === 0 && s === ok[0]) { out.usdc = usdcOf(tx.meta.postTokenBalances, WALLET); usdcSet = true; }
        return classify(s.signature, tx);
      }).catch(() => null)));
      batch.filter(Boolean).forEach(r => out[{ claim: "claims", swap: "swaps", payment: "payments", transfer: "transfers" }[r.kind]].push(r));
    }
    out.feesSol = out.claims.reduce((a, c) => a + c.sol, 0);
    try { localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), data: out })); } catch (e) {}
    return out;
  }
  window.LIVE = load().catch(e => { console.warn("[treat-live]", e); return null; });

  // Home page: replace the "Wish fund" stat with the live treasury balance
  document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector('[data-count="fund"]'); if (!el) return;
    window.LIVE.then(d => {
      if (!d) return; el.removeAttribute("data-count");
      const stat = el.closest(".stat");
      if (d.usdc > 0.01) { el.textContent = "$" + d.usdc.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); stat.querySelector("em").textContent = "USDC in the treasury, live"; }
      else { el.textContent = d.sol.toLocaleString("en-US", { maximumFractionDigits: 3 }) + " SOL"; stat.querySelector("span").textContent = "Treasury"; stat.querySelector("em").textContent = "live from Solana"; }
    });
  });
})();
