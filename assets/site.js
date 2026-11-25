/* Shared chrome for every page: SVG sprite, menu, footer, CA copy, buy links.
   Load right after <body>:  <script src="assets/data.js"></script><script src="assets/site.js"></script>
   and mark the page with <body data-page="home|wishes|shelters|granted|how|treasury|faq">. */
(function () {
  const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <!-- Solana logomark -->
    <linearGradient id="solg" x1="360" y1="-37" x2="141" y2="383" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient>
    <symbol id="sol" viewBox="0 0 398 312">
      <path fill="url(#solg)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
      <path fill="url(#solg)" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
      <path fill="url(#solg)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
    </symbol>
    <!-- Pets: proportions measured from the reference art -->
    <symbol id="cat" viewBox="0 0 64 62"><ellipse cx="32" cy="60.2" rx="29.1" ry="1.6" fill="#67e8f9" opacity=".4"/><path d="M8.8 18.7 L9.8 2.3 L24.6 13.7 Z M55.2 18.7 L54.2 2.3 L39.4 13.7 Z" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><path d="M11.4 15.7 L11.9 6.3 L20.4 14.2 Z M52.6 15.7 L52.1 6.3 L43.6 14.2 Z" fill="#a5f3fc"/><path d="M5.6 47.1 V33.8 C5.6 22.2 15.1 12.7 26.7 12.7 H37.3 C48.9 12.7 58.4 22.2 58.4 33.8 V47.1 Q58.4 50.3 55.2 50.3 H50.5 V55.8 Q50.5 58 48.3 58 H44 Q41.8 58 41.8 55.8 V50.3 H22.2 V55.8 Q22.2 58 20 58 H15.7 Q13.5 58 13.5 55.8 V50.3 H8.8 Q5.6 50.3 5.6 47.1 Z" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><path d="M23 50.3 V48.1 Q23 44.1 32 44.1 Q41 44.1 41 48.1 V50.3 Z" fill="#ffffff" opacity=".42"/><path d="M16.2 21.8 Q18.3 17.2 24.6 15.9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><path d="M29.9 15.4 h3.2" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><g class="blink"><ellipse cx="22" cy="31.7" rx="1.9" ry="2.6" fill="#0b1f2a"/><ellipse cx="42" cy="31.7" rx="1.9" ry="2.6" fill="#0b1f2a"/></g><path d="M29 34.9 q3 2.6 6 0" fill="none" stroke="#0b1f2a" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="18.8" cy="37.2" rx="2.3" ry="1.5" fill="#fda4af"/><ellipse cx="45.2" cy="37.2" rx="2.3" ry="1.5" fill="#fda4af"/><path d="M10 34.8 l6 .8 M10.4 39.2 l5.6 -.9 M54 34.8 l-6 .8 M53.6 39.2 l-5.6 -.9" fill="none" stroke="#0b1f2a" stroke-width="1.5" stroke-linecap="round"/></symbol>
    <symbol id="dog" viewBox="0 0 64 62"><ellipse cx="32" cy="60.2" rx="25.4" ry="1.6" fill="#67e8f9" opacity=".4"/><path d="M8.9 47.1 V26.6 C8.9 19 15.1 12.7 22.8 12.7 H41.2 C48.9 12.7 55.1 19 55.1 26.6 V47.1 Q55.1 50.3 51.9 50.3 H48.2 V55.8 Q48.2 58 46 58 H42.8 Q40.6 58 40.6 55.8 V50.3 H23.4 V55.8 Q23.4 58 21.2 58 H18 Q15.8 58 15.8 55.8 V50.3 H12.1 Q8.9 50.3 8.9 47.1 Z" fill="#67e8f9" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><path d="M24.1 50.3 V48.1 Q24.1 44.1 32 44.1 Q39.9 44.1 39.9 48.1 V50.3 Z" fill="#ffffff" opacity=".42"/><path d="M18.1 21.8 Q20 17.2 25.5 15.9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><path d="M30.2 15.4 h2.8" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><g class="blink"><ellipse cx="22.3" cy="31.7" rx="1.9" ry="2.6" fill="#0b1f2a"/><ellipse cx="40.8" cy="31.7" rx="1.9" ry="2.6" fill="#0b1f2a"/></g><path d="M28.5 34.9 q3 2.6 6 0" fill="none" stroke="#0b1f2a" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="19.1" cy="37.2" rx="2.3" ry="1.5" fill="#fda4af"/><ellipse cx="44" cy="37.2" rx="2.3" ry="1.5" fill="#fda4af"/><path d="M17.2 13.7 C5.7 13.7 3.6 26.3 5.2 31.7 C6.8 36.3 10.7 35.4 12.1 29.9 L18.1 16.3 Z M46.8 13.7 C58.3 13.7 60.4 26.3 58.8 31.7 C57.2 36.3 53.3 35.4 51.9 29.9 L45.9 16.3 Z" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></symbol>
    <symbol id="bun" viewBox="0 0 64 62"><ellipse cx="32" cy="60.2" rx="27" ry="1.6" fill="#67e8f9" opacity=".4"/><rect x="17.8" y="2.3" width="10.8" height="25.9" rx="5.4" fill="#a5f3fc" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><rect x="35.4" y="2.3" width="10.8" height="25.9" rx="5.4" fill="#a5f3fc" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><rect x="21" y="5.3" width="4.3" height="18.9" rx="2.2" fill="#67e8f9"/><rect x="38.7" y="5.3" width="4.3" height="18.9" rx="2.2" fill="#67e8f9"/><path d="M7.5 48.4 V41.8 C7.5 30 17.2 20.3 29.1 20.3 H34.9 C46.8 20.3 56.5 30 56.5 41.8 V48.4 Q56.5 51.6 53.3 51.6 H49.2 V55.8 Q49.2 58 47 58 H43.3 Q41.1 58 41.1 55.8 V51.6 H22.9 V55.8 Q22.9 58 20.7 58 H17 Q14.8 58 14.8 55.8 V51.6 H10.7 Q7.5 51.6 7.5 48.4 Z" fill="#a5f3fc" stroke="#0b1f2a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><path d="M23.7 51.6 V49.4 Q23.7 45.4 32 45.4 Q40.3 45.4 40.3 49.4 V51.6 Z" fill="#ffffff" opacity=".42"/><path d="M17.3 27.8 Q19.2 24 25.1 22.9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><path d="M30 22.5 h2.9" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/><g class="blink"><ellipse cx="23.7" cy="36.1" rx="1.9" ry="2.6" fill="#0b1f2a"/><ellipse cx="41.3" cy="36.1" rx="1.9" ry="2.6" fill="#0b1f2a"/></g><path d="M29.5 38.8 q3 2.6 6 0" fill="none" stroke="#0b1f2a" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="20.5" cy="40.6" rx="2.3" ry="1.5" fill="#fda4af"/><ellipse cx="44.5" cy="40.6" rx="2.3" ry="1.5" fill="#fda4af"/></symbol>
    <!-- ladder -->
    <symbol id="ladder" viewBox="0 0 20 80">
      <g stroke="#0b1f2a" stroke-width="2" fill="#fff" stroke-linejoin="round">
        <rect x="1" y="0" width="4" height="80" rx="1.5"/><rect x="15" y="0" width="4" height="80" rx="1.5"/>
      </g>
      <g stroke="#0b1f2a" stroke-width="2.5" stroke-linecap="round"><path d="M5 8h10M5 20h10M5 32h10M5 44h10M5 56h10M5 68h10"/></g>
    </symbol>
    <!-- items -->
    <symbol id="i-bag" viewBox="0 0 64 64"><path d="M14 14 h36 l4 44 h-44 Z" fill="#fff" stroke="#0b1f2a" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 14 l4 -6 h28 l4 6" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.5" stroke-linejoin="round"/><rect x="20" y="24" width="24" height="18" rx="4" fill="#cffafe" stroke="#0b1f2a" stroke-width="2"/><circle cx="32" cy="33" r="5" fill="#06b6d4"/></symbol>
    <symbol id="i-tub" viewBox="0 0 64 64"><path d="M16 18 h32 l-3 40 h-26 Z" fill="#67e8f9" stroke="#0b1f2a" stroke-width="2.5" stroke-linejoin="round"/><rect x="13" y="10" width="38" height="9" rx="3" fill="#fff" stroke="#0b1f2a" stroke-width="2.5"/><path d="M24 32 q8 -8 16 0 q-8 8 -16 0 Z" fill="#fff" stroke="#0b1f2a" stroke-width="2"/></symbol>
    <symbol id="i-bottle" viewBox="0 0 64 64"><rect x="26" y="6" width="12" height="8" rx="2" fill="#0b1f2a"/><path d="M22 14 h20 q6 6 6 14 v28 q0 3 -3 3 h-26 q-3 0 -3 -3 v-28 q0 -8 6 -14 Z" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.5" stroke-linejoin="round"/><rect x="21" y="32" width="22" height="14" rx="3" fill="#fff" stroke="#0b1f2a" stroke-width="2"/><path d="M32 35 v8 M28 39 h8" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/></symbol>
    <symbol id="i-bed" viewBox="0 0 64 64"><ellipse cx="32" cy="42" rx="26" ry="13" fill="#06b6d4" stroke="#0b1f2a" stroke-width="2.5"/><ellipse cx="32" cy="39" rx="18" ry="8" fill="#cffafe" stroke="#0b1f2a" stroke-width="2"/></symbol>
    <symbol id="i-toy" viewBox="0 0 64 64"><path d="M14 44 C10 30 22 14 40 12 C46 12 50 16 48 20 C38 22 26 32 24 46 C22 52 16 52 14 44 Z" fill="#a5f3fc" stroke="#0b1f2a" stroke-width="2.5" stroke-linejoin="round"/><path d="M44 14 l6 -6" stroke="#0b1f2a" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="44" r="8" fill="#22d3ee" stroke="#0b1f2a" stroke-width="2.5"/></symbol>
    <symbol id="i-can" viewBox="0 0 64 64"><rect x="14" y="16" width="36" height="38" rx="5" fill="#fff" stroke="#0b1f2a" stroke-width="2.5"/><ellipse cx="32" cy="16" rx="18" ry="5" fill="#67e8f9" stroke="#0b1f2a" stroke-width="2.5"/><path d="M20 34 h24 M20 42 h16" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/></symbol>
  </defs>
</svg>`;
  const PAGES = [
    ["home", "index.html", "Home"],
    ["wishes", "wishes.html", "Wishes"],
    ["shelters", "shelters.html", "Shelters"],
    ["granted", "granted.html", "Granted"],
    ["how", "how-it-works.html", "How it works"],
    ["treasury", "treasury.html", "Treasury"],
    ["faq", "faq.html", "FAQ"],
  ];
  const page = document.body.dataset.page || "";
  const ca = CONFIG.contractAddress;
  const nav = `
<nav class="top">
  <div class="wrap">
    <a class="logo" href="index.html"><img class="brand-mark" src="assets/logo-paw.webp?v=1" alt="" draggable="false"><span>${CONFIG.brand}</span></a>
    <div class="links">${PAGES.map(([k, href, label]) => `<a href="${href}"${k === page ? ' class="on" aria-current="page"' : ""}>${label}</a>`).join("")}</div>
    <div class="nav-r">
      <button class="ca" id="caBtn" title="Copy contract address"><b>CA</b><span id="caShort">${ca ? ca.slice(0, 4) + "…" + ca.slice(-4) : "Coming soon"}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
      <a class="xbtn" href="${CONFIG.xUrl}" target="_blank" rel="noopener" aria-label="X / Twitter">𝕏</a>
      <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
  <div class="mobile-links" id="mobileLinks" hidden>${PAGES.map(([k, href, label]) => `<a href="${href}"${k === page ? ' class="on"' : ""}>${label}</a>`).join("")}</div>
</nav>`;
  document.body.insertAdjacentHTML("afterbegin", SPRITE + nav);

  const toast = (msg) => {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("on"); setTimeout(() => t.classList.remove("on"), 1600);
  };
  window.toast = toast;
  document.getElementById("caBtn").onclick = () =>
    ca ? navigator.clipboard.writeText(ca).then(() => toast("Contract address copied")) : toast("Launching soon");
  const burger = document.getElementById("burger"), ml = document.getElementById("mobileLinks");
  burger.onclick = () => { ml.hidden = !ml.hidden; burger.setAttribute("aria-expanded", String(!ml.hidden)); };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-brand]").forEach((e) => (e.textContent = CONFIG.brand));
    document.querySelectorAll("[data-ticker]").forEach((e) => (e.textContent = CONFIG.ticker));
    document.querySelectorAll("[data-buy]").forEach((e) => (e.href = CONFIG.buyUrl));
    document.body.insertAdjacentHTML("beforeend", `
<footer>
  <div class="wrap">
    <div class="fcol">
      <a class="logo" href="index.html"><img class="brand-mark" src="assets/logo-paw.webp?v=1" alt="" draggable="false"><span>${CONFIG.brand}</span></a>
      <p>Shelter pets made a wish list. ${CONFIG.ticker} fills it.</p>
    </div>
    <div class="flinks">${PAGES.map(([, href, label]) => `<a href="${href}">${label}</a>`).join("")}</div>
    <div class="fnote">© ${new Date().getFullYear()} ${CONFIG.brand}. Not affiliated with Chewy, Amazon, SP3ND, pump.fun or Circle.</div>
  </div>
</footer>`);
  });
})();
