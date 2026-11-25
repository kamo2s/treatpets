/* ================= EDIT EVERYTHING HERE ================= */
const CONFIG = {
  brand: "Treat",
  ticker: "$TREAT",
  contractAddress: "6ofNt6UqKHfuAfxpWR1MQhEuJ8F5LCXrJRP9Rmzhpump",
  buyUrl: "https://pump.fun/coin/6ofNt6UqKHfuAfxpWR1MQhEuJ8F5LCXrJRP9Rmzhpump",
  xUrl: "https://x.com/treatpetslol",
  treasuryUrl: "https://solscan.io",
  fundShare: 90,                       // % of fees to the wish fund
  // Treasury: paste the real wallet addresses; each list gets one row per real transaction (Solscan links)
  wallets: {
    treasury: "",   // receives creator fees, holds the wish fund
    team: "",       // receives the 10% team share
    sp3nd: ""       // SP3ND's payment address (orders are paid to it)
  },
  feeClaims: [],    // { date:"2026-12-01", sol:1.23, tx:"https://solscan.io/tx/…" }
  swaps: [],        // { date:"2026-12-01", sol:1.23, usdc:180.4, team:18.04, fund:162.36, tx:"https://solscan.io/tx/…" }

  stats: { granted: 13, ordersPaid: 0, paid: 178, open: 98268, shelters: 6200, fund: 0 },   // granted/paid: purchases made for shelters so far
  // "Up next" = first shelter in the queue below
  // hero fan (5 cards, middle one gets the GRANTED badge)
  fan: [
    { p: "tugToss",      for: "True North GSD Rescue" },
    { p: "esbilac",      for: "Southeast Volusia Humane Society" },
    { p: "purinaKitten", for: "Wags & Whiskers Animal Rescue of MN", badge: "MOST NEEDED" },
    { p: "tidyCats",     for: "Country Cat Lady" },
    { p: "fancyFeast",   for: "Good Karma Pet Rescue" }
  ],
  // real "most needed" wishes on public Chewy lists (snapshot Nov 2026; refresh before launch)
  wishing: [
    { p: "purinaKitten", shelter: "Wags & Whiskers Animal Rescue of MN", place: "Burnsville, MN" },
    { p: "weruva",       shelter: "Cattyshack, Inc.",                   place: "Huntsville, AL" },
    { p: "tidyCats",     shelter: "Country Cat Lady",                   place: "Wayland, MI" },
    { p: "naturalBal",   shelter: "First Coast No More Homeless Pets",  place: "Jacksonville, FL" },
    { p: "esbilac",      shelter: "Southeast Volusia Humane Society",   place: "New Smyrna Beach, FL" },
    { p: "fancyFeast",   shelter: "Good Karma Pet Rescue, Inc.",        place: "Fort Lauderdale, FL" },
    { p: "diamond",      shelter: "Pit Ridge Rescue",                   place: "Rogers, AR" },
    { p: "tugToss",      shelter: "True North GSD Rescue",              place: "Kenmore, WA" },
    { p: "hartz",        shelter: "Pleasant Hearts Pet Food Pantry",    place: "Sheridan, MI" },
    { p: "freshStep",    shelter: "Leon County Humane Society",         place: "Tallahassee, FL" },
    { p: "kongSqueezz",  shelter: "Taylor County Humane Society",       place: "Grafton, WV" },
    { p: "oxbowCube",    shelter: "Magic Happens Rabbit Rescue",        place: "Baton Rouge, LA" },
    { p: "catDish",      shelter: "Fredericksburg SPCA",                place: "Fredericksburg, VA" },
    { p: "flexiChew",    shelter: "Humane Society of Boulder Valley",   place: "Boulder, CO" },
    { p: "flutterBalls", shelter: "Santa Cruz County Animal Shelter Foundation", place: "Santa Cruz, CA" },
    { p: "blueStix",     shelter: "AH Rescue Sanctuary",                place: "Lucerne, IN" }
  ],
  // The real queue: open wishes on public Chewy lists, in the order the fund will buy them.
  queue: [
    { shelter: "Woof Den Rescue",          place: "San Juan Bautista, CA",       logo: "https://prd-use2-shelter-app.s3.amazonaws.com/tqgqzuahwm.png", page: "https://www.chewy.com/g/woof-den-rescue_b122969471", items: ["marrowBakes","doggiePaws"] },
    { shelter: "Nine Lives Cat Rescue",    place: "Lexington, SC",     logo: "https://prd-use1-shelter-app.s3.amazonaws.com/pjhzqosojb.png", page: "https://www.chewy.com/g/nine-lives-cat-rescue_b98136353", items: ["shrimpies","dynamite"] },
    { shelter: "From the Heart Rescue",    place: "El Paso, TX",       logo: "https://prd-use1-shelter-app.s3.amazonaws.com/zojdndzmur.png", page: "https://www.chewy.com/g/from-the-heart-rescue_b84196647", items: ["leashBlack","leashRed"] },
    { shelter: "Stumptown Strays",         place: "Portland, OR",      logo: "https://prd-use2-shelter-app.s3.amazonaws.com/zsipklmlfd.png", page: "https://www.chewy.com/g/stumptown-strays_b90469692", items: ["loofaChewy"] },
    { shelter: "Luvnpupz",                 place: "Grand Rapids, MI",  logo: "https://prd-use1-shelter-app.s3.amazonaws.com/gsrrmhzevi.png", page: "https://www.chewy.com/g/luvnpupz-llc_b70845073", items: ["nBone"] },
    { shelter: "Texas Star Rescue",        place: "Longview, TX",      logo: "https://prd-use1-shelter-app.s3.amazonaws.com/bpleywqkna.png", page: "https://www.chewy.com/g/texas-star-rescue_b72172021", items: ["powerChew"] },
    { shelter: "Pet-A-Bulls Inc.",         place: "Santa Fe, NM",      logo: "https://prd-use2-shelter-app.s3.amazonaws.com/owwwffhxgg.png", page: "https://www.chewy.com/g/pet-a-bulls-inc_b113330417", items: ["knuckle"] },
    { shelter: "Live Like Roo Foundation", place: "Arlington Heights, IL", logo: "https://prd-use1-shelter-app.s3.amazonaws.com/slauwhyedv.png", page: "https://www.chewy.com/g/live-like-roo-foundation_b64825914", items: ["buddyBiscuits"] }
  ],
  // REAL orders only. Add one row per paid order; every link must point to the real record.
  // { id:"#001", date:"2026-12-03", shelter:"…", place:"…", items:["tidyCats"], usdc:41.20,
  //   tx:"https://solscan.io/tx/…", storeOrder:"113-…", storeUrl:"…", tracking:"https://…", delivered:true }
  orders: [],
  // store tabs: which products show under each store
  stores: {
    chewy:   { label: "Chewy",   logo: "chewy",   items: ["tidyCats","purinaKitten","diamond","fancyFeast","esbilac","tugToss","sheba","banana"] },
    walmart: { label: "Walmart", logo: "walmart", items: ["wmDogChow","wmSpecialKitty","wmPads","wmKittenChow","wmCatChow","wmMilkBone","wmCuddler","wmThrow"] },
    amazon:  { label: "Amazon",  logo: "amazon",  items: ["amzKitten","amzTempt","amzTidy","amzFancy","amzEsbilac","amzTug","amzKong","amzBanana"] }
  }
};

const LOGOS = {
  chewy:   "https://upload.wikimedia.org/wikipedia/commons/6/63/Chewy_pet_food_logo.svg",
  amazon:  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  walmart: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Walmart_logo_%282025%29.svg",
  usdc:    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Circle_USDC_Logo.svg"
};

// Real products (Chewy listings + Chewy CDN images)
const IMG = "https://image.chewy.com/catalog/general/images/";
const PRODUCTS = {
  banana:      { n: "Yeowww! Catnip Yellow Banana Cat Toy", p: 7.64, id: 130264, img: "yeowww-catnip-yellow-banana-cat-toy/img-654391._AC_SS400_V1_.jpg" },
  tempChicken: { n: "Temptations Classic Tasty Chicken Flavor Soft & Crunchy Cat Treats, 16-oz tub", p: 7.96, id: 109157, img: "temptations-classic-tasty-chicken-flavor-soft-crunchy-cat-treats-16oz-tub/img-1a20d87a919693cbb71._AC_SS400_V1_.jpg" },
  tempShrimp:  { n: "Temptations Classic Shrimpy Shrimp Flavor Soft & Crunchy Cat Treats, 16-oz tub", p: 7.98, id: 183518, img: "temptations-classic-shrimpy-shrimp-flavor-soft-crunchy-cat-treats-16oz-tub/img-1a057b289808e008838._AC_SS400_V1_.jpg" },
  sheba:       { n: "Sheba Perfect Portions Grain-Free Salmon & Tuna Cuts in Gravy Variety Pack, 2.6-oz, case of 12", p: 14.46, id: 153562, img: "sheba-perfect-portions-grain-free-salmon-sustainable-tuna-cuts-in-gravy-entree-variety-pack-adult-wet-cat-food-trays-26oz-case-of-12/img-1a05f9a86085a5c032b._AC_SS400_V1_.jpg" },
  purinaKitten:{ n: "Purina ONE +Plus Healthy Kitten Natural Dry Cat Food, 16-lb bag", p: 34.48, id: 119347, img: "moe/06a01a7f-1920-7bbe-8000-b45d80fb5e13._AC_SS400_V1_.jpg" },
  weruva:      { n: "Weruva Kitten Chicken Breast Formula in Hydrating Purée, 3-oz can, case of 12", p: 23.04, id: 342033, img: "moe/067f5655-a24e-7abe-8000-280361061f4e._AC_SS400_V1_.jpg" },
  tidyCats:    { n: "Tidy Cats Free & Clean Unscented Clumping Clay Cat Litter, 35-lb pail", p: 18.99, id: 168310, img: "tidy-cats-free-clean-unscented-clumping-clay-cat-litter-35lb-pail/img-1a091a9cc595f707931._AC_SS400_V1_.jpg" },
  naturalBal:  { n: "Natural Balance L.I.D. Green Pea & Chicken Grain-Free Dry Cat Food, 10-lb bag", p: 39.98, id: 33230, img: "natural-balance-lid-limited-ingredient-diets-green-pea-chicken-formula-grain-free-dry-cat-food-10lb-bag/img-226522._AC_SS400_V1_.jpg" },
  esbilac:     { n: "PetAg Esbilac Puppy Milk Replacer Powder, 28-oz can", p: 63.74, id: 125377, img: "petag-esbilac-puppy-milk-replacer-powder-for-puppies-28oz-can/img-411924._AC_SS400_V1_.jpg" },
  fancyFeast:  { n: "Fancy Feast Kitten Tender Turkey Feast Canned Cat Food, 3-oz, case of 24", p: 23.05, id: 103976, img: "fancy-feast-kitten-tender-turkey-feast-canned-cat-food-3oz-case-of-24/img-449472._AC_SS400_V1_.jpg" },
  diamond:     { n: "Diamond Maintenance 22/12 Chicken Adult Dry Dog Food, 40-lb bag", p: 37.99, id: 34953, img: "moe/06893728-4dec-70f5-8000-bf192264137c._AC_SS400_V1_.jpg" },
  tugToss:     { n: "Jolly Pets Tug-n-Toss Dog Toy, Purple, 8-in", p: 24.27, id: 38772, img: "jolly-pets-tug-n-toss-dog-toy-purple-8in/img-738098._AC_SS400_V1_.jpg" },
  hartz:        { n: "Hartz UltraGuard Rid Flea & Tick Oatmeal Dog Shampoo, 18-fl oz", p: 5.18, id: 133655, img: "hartz-ultraguard-rid-flea-tick-oatmeal-dog-shampoo-18fl-oz-bottle/img-373453._AC_SS400_V1_.jpg" },
  freshStep:    { n: "Fresh Step Febreze Multi-Cat Non-Clumping Clay Cat Litter, 7-lb bag", p: 5.19, id: 32599, img: "fresh-step-premium-febreze-freshness-scented-multi-cat-non-clumping-clay-cat-litter-7lb-bag/img-1a0ee1e4922b72c8070._AC_SS400_V1_.jpg" },
  kongSqueezz:  { n: "KONG Squeezz Ball Dog Toy, Medium", p: 5.29, id: 38509, img: "kong-squeezz-ball-dog-toy-color-varies-medium/img-534208._AC_SS400_V1_.jpg" },
  oxbowCube:    { n: "Oxbow Enriched Life Willow Play Cube Small Animal Toy", p: 5.09, id: 303684, img: "oxbow-enriched-life-willow-play-cube-small-animal-toy/img-42054._AC_SS400_V1_.jpg" },
  catDish:      { n: "Van Ness Ecoware Non-Skid Cat Dish, Blue, 8-oz", p: 5.19, id: 109329, img: "moe/069efbf3-0f3e-7f90-8000-6150e4e3bd06._AC_SS400_V1_.jpg" },
  flexiChew:    { n: "Nylabone FlexiChew Dental Chew Toy, Textured Bone, Chicken, Small", p: 5.15, id: 39392, img: "moe/06882431-4641-7bbc-8000-6239fa338f74._AC_SS400_V1_.jpg" },
  flutterBalls: { n: "SmartyKat Flutter Balls Feathery Cat Toy", p: 5.04, id: 130270, img: "moe/069257f3-eec1-730a-8000-69b65d39aaba._AC_SS400_V1_.jpg" },
  blueStix:     { n: "Blue Buffalo Blue Stix Chicken Pepperoni-Style Dog Treats, 5-oz bag", p: 5.22, id: 320465, img: "blue-buffalo-blue-stix-chicken-recipe-pepperoni-style-dog-treats-5oz-bag/img-398890._AC_SS400_V1_.jpg" },
  marrowBakes:  { n: "Blue Dog Bakery Marrow Bakes Beef Flavor Dog Treats, 12-oz bag", p: 5.08, id: 260147, img: "moe/06a107e8-548a-7fa7-8000-0368e1bc7c41._AC_SS400_V1_.jpg" },
  doggiePaws:   { n: "Blue Dog Bakery Doggie Paws Maple Bacon Dog Treats, 16.2-oz box", p: 5.16, id: 188192, img: "moe/06a107ea-a739-7d2f-8000-8095121df53a._AC_SS400_V1_.jpg" },
  shrimpies:    { n: "Catstages Dental Shrimpies Cat Chew Toy with Catnip", p: 5.00, id: 217372, img: "moe/067a60ed-9a9f-7cc1-8000-7db23f053bcf._AC_SS400_V1_.jpg" },
  dynamite:     { n: "Catstages Magic Dynamite Cat Toy with Catnip", p: 5.09, id: 49619, img: "moe/06830d70-05d9-7c59-8000-002d51d531aa._AC_SS400_V1_.jpg" },
  leashBlack:   { n: "PetSafe Nylon Dog Leash, Black, 6-ft, 3/4-in", p: 5.19, id: 52257, img: "petsafe-nylon-dog-leash-black-6ft-long-34in-wide/img-264644._AC_SS400_V1_.jpg" },
  leashRed:     { n: "PetSafe Nylon Dog Leash, Red, 6-ft, 3/4-in", p: 5.29, id: 52293, img: "petsafe-nylon-dog-leash-red-6ft-long-34in-wide/img-142204._AC_SS400_V1_.jpg" },
  loofaChewy:   { n: "Multipet Loofa Dog Original Squeaky Plush Dog Toy, Medium", p: 5.00, id: 53003, img: "moe/068ecd7a-094a-746b-8000-9d6fe108dbd1._AC_SS400_V1_.jpg" },
  nBone:        { n: "N-Bone Puppy Teething Sticks, Chicken Flavor, 3.74-oz bag", p: 5.00, id: 50471, img: "moe/069ab5f4-52c4-7445-8000-18e8332f981b._AC_SS400_V1_.jpg" },
  powerChew:    { n: "Nylabone Power Chew Peanut Butter Flavored Dog Chew Toy, Medium", p: 5.09, id: 137712, img: "moe/0692607e-7753-7916-8000-e586b15e10db._AC_SS400_V1_.jpg" },
  knuckle:      { n: "Smokehouse USA Meaty Knuckle Bone Dog Treat", p: 5.13, id: 105168, img: "smokehouse-usa-meaty-knuckle-bone-dog-treat/img-635597._AC_SS400_V1_.jpg" },
  buddyBiscuits:{ n: "Buddy Biscuits Softies Bacon & Cheese Soft & Chewy Dog Treats, 6-oz", p: 5.29, id: 36465, img: "moe/06a31a10-ab10-7b1f-8000-5d7814e548cd._AC_SS400_V1_.jpg" },
  // Amazon (listings found via web search; prices from the latest search snapshot, null = check live page)
  amzKitten:  { store: "amazon", n: "Purina ONE High Protein Natural Kitten Dry Cat Food, 16-lb bag", p: 34.48, url: "https://www.amazon.com/dp/B000WFKNO6", img: IMG + "moe/06a01a7f-1920-7bbe-8000-b45d80fb5e13._AC_SS400_V1_.jpg" },
  amzTempt:   { store: "amazon", n: "Temptations Classic Crunchy and Soft Cat Treats, Tasty Chicken, 16 oz", p: 8.48, url: "https://www.amazon.com/dp/B00IOTB7PG", img: IMG + "temptations-classic-tasty-chicken-flavor-soft-crunchy-cat-treats-16oz-tub/img-1a20d87a919693cbb71._AC_SS400_V1_.jpg" },
  amzTidy:    { store: "amazon", n: "Tidy Cats Free & Clean Unscented Clumping Cat Litter, 35 lb", p: null, url: "https://www.amazon.com/dp/B07DPNWJ34", img: IMG + "tidy-cats-free-clean-unscented-clumping-clay-cat-litter-35lb-pail/img-1a091a9cc595f707931._AC_SS400_V1_.jpg" },
  amzFancy:   { store: "amazon", n: "Purina Fancy Feast Kitten Tender Turkey Feast Wet Cat Food, 24 x 3 oz cans", p: 23.04, url: "https://www.amazon.com/dp/B001G0NL2W", img: IMG + "fancy-feast-kitten-tender-turkey-feast-canned-cat-food-3oz-case-of-24/img-449472._AC_SS400_V1_.jpg" },
  amzEsbilac: { store: "amazon", n: "Pet-Ag Esbilac Puppy Milk Replacer Powder, 28 oz", p: 61.37, url: "https://www.amazon.com/dp/B0002YFB58", img: IMG + "petag-esbilac-puppy-milk-replacer-powder-for-puppies-28oz-can/img-411924._AC_SS400_V1_.jpg" },
  amzTug:     { store: "amazon", n: "Jolly Pets Tug-n-Toss Heavy Duty Dog Toy Ball with Handle, 8 in, Purple", p: null, url: "https://www.amazon.com/dp/B0006G570Q", img: IMG + "jolly-pets-tug-n-toss-dog-toy-purple-8in/img-738098._AC_SS400_V1_.jpg" },
  amzKong:    { store: "amazon", n: "KONG Squeezz Ball Dog Toy, Medium, pack of 3", p: 15.87, url: "https://www.amazon.com/dp/B00LYAZ92O", img: IMG + "kong-squeezz-ball-dog-toy-color-varies-medium/img-534208._AC_SS400_V1_.jpg" },
  amzBanana:  { store: "amazon", n: "Yeowww! Catnip Chi-CAT-a Banana Cat Toy, 7 in", p: 8.07, url: "https://www.amazon.com/dp/B000AUJFHE", img: IMG + "yeowww-catnip-yellow-banana-cat-toy/img-654391._AC_SS400_V1_.jpg" },
  // Walmart (live listings, prices snapshot Nov 2026)
  wmCatChow:     { store: "walmart", n: "Purina Cat Chow Naturals Indoor Dry Cat Food, Real Chicken, 3.15-lb", p: 6.94, url: "https://www.walmart.com/ip/49651189", img: "https://i5.walmartimages.com/seo/Purina-Cat-Chow-Naturals-Indoor-Dry-Cat-Food-Chicken-Turkey-3-15-lb-Bag_fc0f21c6-5bdd-44d1-9057-12d2890e1d32.bc7712592ce25ecb4c165baffe416213.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmMilkBone:    { store: "walmart", n: "Milk-Bone Peanut Buttery Cups Soft Dog Treats with Jif & Bacon, 4.5-oz", p: 3.98, url: "https://www.walmart.com/ip/19437002964", img: "https://i5.walmartimages.com/seo/Milk-Bone-Peanut-Buttery-Cups-Filled-Soft-Dog-Treats-With-Jif-Peanut-Butter-Real-Bacon-4-5-oz-Bags_5dadfb5c-1371-42a2-bea6-39ec5a5866a9.218b1aa8283c4700b556b1f84fd70abf.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmBowl:        { store: "walmart", n: "Vibrant Life Large 7.5-Cup Stainless Steel Pet Bowl, Navy", p: 7.47, url: "https://www.walmart.com/ip/14784752417", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Large-7-5-Cup-Stainless-Steel-Dog-Printed-Pet-Bowl-Navy_5cfdafad-d521-46f1-9800-ead940b04326.6365fa0be6e785747e9949927f20e812.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmThrow:       { store: "walmart", n: "Vibrant Life Pet Throw Blanket, Multicolor Paws, 36 x 27 in", p: 5.48, url: "https://www.walmart.com/ip/5363263022", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Pet-Throw-Multicolor-Paws-36-x-27_f82c0769-5a99-4288-b438-beee23e31222.e85f4277dbe2114f06500f77ef774f38.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmCatToys:     { store: "walmart", n: "Vibrant Life Cat Toys Stocking, Blue, 18 pieces", p: 5.00, url: "https://www.walmart.com/ip/19959272119", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Holiday-Cat-Toys-Stocking-Blue-18-Pieces_ad3a876d-5f69-47a0-bcfa-1050369b3d5f.3081440d6ebaf9812445adde3f84a9e0.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmTowels:      { store: "walmart", n: "Scott Paper Towels, Choose-A-Sheet, 6 Double Rolls", p: 6.96, url: "https://www.walmart.com/ip/8886020987", img: "https://i5.walmartimages.com/seo/Scott-Paper-Towels-Choose-A-Sheet-6-Double-Rolls_10ab20cc-d654-4bff-87d8-e56d4b0f4497.34e50c5d67c21a95e50b5282299aa2fc.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmDogChow:     { store: "walmart", n: "Purina Dog Chow Complete Adult Dry Dog Food, Real Chicken, 44-lb bag", p: 25.97, url: "https://www.walmart.com/ip/1446707820", img: "https://i5.walmartimages.com/seo/Purina-Dog-Chow-Complete-Dry-Dog-Food-for-Adult-Dogs-High-Protein-Real-Chicken-44-lb-Bag_fa60a08c-2d0f-4abe-894c-d7c173cf11db.536af1e18f58847c72277fd54fcc0700.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmSpecialKitty:{ store: "walmart", n: "Special Kitty Tight Clumping Clay Cat Litter, Fresh Scent, 20-lb jug", p: 8.86, url: "https://www.walmart.com/ip/42132300", img: "https://i5.walmartimages.com/seo/Special-Kitty-Scoopable-Tight-Clumping-Cat-Litter-Fresh-Scent-20-lb_c7a041d5-151b-4a0a-88b6-ceda8e3c89db.cbc6039d1fd7013ff7ddca1c1a064aff.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmPads:        { store: "walmart", n: "Vibrant Life Dog & Puppy Training Pads, 22 x 22 in, 100 count", p: 15.88, url: "https://www.walmart.com/ip/44856982", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Training-Pads-Super-Absorbent-Leak-Proof-Fast-Dry-Dog-and-Puppy-Pee-Pads-L-22-in-x-22-in-100-Count_c5d9b216-b560-4516-9b49-eb45fb274c6b.c2aadef5724cf2bb53cf92242b9141b5.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmKittenChow:  { store: "walmart", n: "Purina Kitten Chow Year One Essentials, Real Chicken, 3.15-lb bag", p: 6.28, url: "https://www.walmart.com/ip/21119899", img: "https://i5.walmartimages.com/seo/Purina-Kitten-Chow-Year-One-Essentials-with-Real-Chicken-High-Protein-Complete-3-15-lb_34929e90-5b43-4fa0-bcd8-295a2d1df43a.5c9d9e05fd81b28d60057c2a88ea792d.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmCuddler:     { store: "walmart", n: "Vibrant Life Medium Signature Cuddler Pet Bed, Gray, 22 x 27 in", p: 12.73, url: "https://www.walmart.com/ip/20132956965", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Medium-Signature-Cuddler-Pet-Bed-Gray-22-x-27_71034c7c-a9f6-41cc-8fd3-e79b6516e26d.eedeedb4b9850a9cea4954346bb78429.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" },
  wmLoofa:       { store: "walmart", n: "Multipet Smiling Loofa Plush Dog Toy with Squeaker, 6-in", p: 3.48, url: "https://www.walmart.com/ip/20711969", img: "https://i5.walmartimages.com/seo/Multipet-Smiling-Loofa-Plush-Dog-Toy-6-inch-Colorful-Plaid_a0e66665-4431-4919-8e42-835c917e155e.28fa29e08a093397a6d55b54005e24b3.jpeg?odnHeight=400&odnWidth=400&odnBg=FFFFFF" }
};
const P = k => { const x = PRODUCTS[k];
  return x.store ? { ...x, src: x.img } : { ...x, store: "chewy", src: IMG + x.img, url: `https://www.chewy.com/dp/${x.id}` }; };
const initials = s => s.replace(/,? Inc\.?|,? LLC/gi,"").split(/\s+/).filter(w=>/^[A-Za-z]/.test(w) && !/^(of|the|and|&)$/i.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join("");
const avColor = s => ["#0891b2","#0e7490","#06b6d4","#155e75","#0284c7","#0f766e"][[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%6];
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const pic = (x, cls="") => `<img class="${cls}" src="${x.src}" alt="${esc(x.n)}" loading="lazy" referrerpolicy="no-referrer">`;
/* ======================================================== */
