/* Local layout preview: sample orders so the Granted / Treasury / Home tables can be seen filled in.
   Runs ONLY on localhost / 127.0.0.1 / file:// — on any real domain this file does nothing,
   so these made-up orders can never appear on the published site. Delete this file whenever you like. */
(function () {
  const h = location.hostname;
  const local = location.protocol === "file:" || h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h.endsWith(".localhost");
  if (!local || typeof CONFIG === "undefined") return;

  // 6 orders · 13 items · $178.00 total (matches CONFIG.stats)
  CONFIG.orders = [
    { id: "#006", date: "2026-11-21", shelter: "Pit Ridge Rescue", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/wkphnvydmw.png", page: "https://www.chewy.com/g/pit-ridge-rescue_b79775809", place: "Rogers, AR", items: ["blueStix", "flexiChew", "powerChew"], usdc: 17.20, tx: "#", storeOrder: "114-3388201-5520417", storeUrl: "#", tracking: "#", delivered: false },
    { id: "#005", date: "2026-11-18", shelter: "Leon County Humane Society", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/gpxxwgjpwm.png", page: "https://www.chewy.com/g/leon-county-humane-society_b68611572", place: "Tallahassee, FL", items: ["hartz", "catDish", "flutterBalls"], usdc: 20.10, tx: "#", storeOrder: "113-9052716-2283648", storeUrl: "#", tracking: "#", delivered: false },
    { id: "#004", date: "2026-11-14", shelter: "True North GSD Rescue", logo: "https://prd-use2-shelter-app.s3.amazonaws.com/qiyjrqwhty.png", page: "https://www.chewy.com/g/true-north-gsd-rescue_b81789705", place: "Kenmore, WA", items: ["tugToss", "kongSqueezz"], usdc: 36.25, tx: "#", storeOrder: "112-7719034-6641205", storeUrl: "#", tracking: "#", delivered: true },
    { id: "#003", date: "2026-11-10", shelter: "Good Karma Pet Rescue, Inc.", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/yysavohqhs.png", page: "https://www.chewy.com/g/good-karma-pet-rescue-inc_b71336626", place: "Fort Lauderdale, FL", items: ["fancyFeast", "banana"], usdc: 35.10, tx: "#", storeOrder: "114-2207563-9013382", storeUrl: "#", tracking: "#", delivered: true },
    { id: "#002", date: "2026-11-06", shelter: "Country Cat Lady", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/nmmuthuqta.png", page: "https://www.chewy.com/g/country-cat-lady_b71512351", place: "Wayland, MI", items: ["tidyCats", "freshStep"], usdc: 29.40, tx: "#", storeOrder: "113-6640218-1175906", storeUrl: "#", tracking: "#", delivered: true },
    { id: "#001", date: "2026-11-02", shelter: "Wags & Whiskers Animal Rescue of MN", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/yvxuovyqeo.png", page: "https://www.chewy.com/g/wags-whiskers-animal-rescue-of-mn_b72122862", place: "Burnsville, MN", items: ["purinaKitten"], usdc: 39.95, tx: "#", storeOrder: "112-5583910-3307421", storeUrl: "#", tracking: "#", delivered: true },
  ];
  CONFIG.stats.ordersPaid = CONFIG.orders.length;
})();
