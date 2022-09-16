// To populate the database, run this file with the terminal command:
//    node seed.js

require("dotenv").config();
require("./config/database");

const BrandModel = require("./models/Brand");
const ProductModel = require("./models/product");
  // Cool trick: if you put a function in brackets like this:
  // (function brands(){})(),
  // it executes immediately without needing to be called. It's called an "immediately invoked" function (IIFE).
  (async function populateDB() {

    await BrandModel.deleteMany({});
    const brands = await BrandModel.create([
      { name: "Nike" },
      { name: "New Balance" },
      { name: "Adidas" },
      { name: "Dr. Marten" },
      { name: "Timberland" },
      { name: "Crocs" },
      { name: "ASICS" },
    ]);

    await ProductModel.deleteMany({});
    const products = await ProductModel.create([
      {
        image: [
          "https://cdn.runrepeat.com/i/nike/28278/nike-air-max-270-black-6266-600.jpg",
          "https://cdn.runrepeat.com/i/nike/28278/nike-women-s-air-max-270-womens-black-anthracite-white-3989-3128249-600.jpg",
          "https://cdn.runrepeat.com/i/nike/28278/nike-air-max-270-black-6266-8249983-600.jpg",
        ],
        name: "Nike Air Max 270",
        brand: brands[0],
        price: 195,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/nike/30973/nike-air-max-97-essential-sizemap-46-herren-cool-grey-e31a-600.jpg",
          "https://cdn.runrepeat.com/i/nike/30973/nike-air-max-97-essential-sizemap-46-herren-cool-grey-e31a-9877772-600.jpg",
          "https://cdn.runrepeat.com/i/nike/30973/nike-air-max-97-essential-sizemap-46-herren-cool-grey-e31a-9877773-600.jpg",
        ],
        name: "Nike Air Max 97",
        brand: brands[0],
        price: 205,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/nike/24857/nike-men-s-tanjun-running-shoe-midnight-navy-white-game-royal-9-d-m-us-mens-midnight-navy-white-game-royal-7d5f-600.jpg",
          "https://cdn.runrepeat.com/i/nike/24857/nike-men-s-tanjun-running-shoe-midnight-navy-white-game-royal-9-d-m-us-mens-midnight-navy-white-game-royal-7d5f-991935-600.jpg",
          "https://cdn.runrepeat.com/i/nike/24857/nike-men-s-tanjun-running-shoe-midnight-navy-white-game-royal-9-d-m-us-mens-midnight-navy-white-game-royal-7d5f-991932-600.jpg",
        ],
        name: "Nike Tanjun",
        brand: brands[0],
        price: 149,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/new-balance/36800/new-balance-fresh-foam-1080-v11-black-8a7e-600.jpg",
          "https://cdn.runrepeat.com/i/new-balance/36800/new-balance-fresh-foam-1080-v11-black-8a7e-9989641-600.jpg",
          "https://cdn.runrepeat.com/i/new-balance/36800/new-balance-fresh-foam-1080-v11-black-8a7e-9989639-600.jpg",
        ],
        name: "New Balance Fresh Foam",
        brand: brands[1],
        price: 189,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/new-balance/36987/new-balance-fuelcell-rebel-v2-blue-57b1-600.jpg",
        ],
        name: "New Balance FuelCell Rebel v2",
        brand: brands[1],
        price: 139,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/new-balance/36258/new-balance-fuelcell-prism-energystreak-white-neo-flame-men-s-shoes-adult-white-c90e-600.jpg",
          "https://cdn.runrepeat.com/i/new-balance/36258/new-balance-fuelcell-prism-energystreak-white-neo-flame-men-s-shoes-adult-white-c90e-9078507-600.jpg",
          "https://cdn.runrepeat.com/i/new-balance/36258/new-balance-fuelcell-prism-energystreak-white-neo-flame-men-s-shoes-adult-white-c90e-9078509-600.jpg",
        ],
        name: "New Balance FuelCell Prism",
        brand: brands[1],
        price: 99,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/adidas/32545/adidas-ozweego-clear-brown-white-adult-male-white-fd91-600.jpg",
        ],
        name: "Adidas Ozweego",
        brand: brands[2],
        price: 129,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/adidas/37549/adidas-running-lite-racer-adapt-3-0-scarlet-core-black-footwear-white-men-scarlet-core-black-footwear-white-cb0f-600.jpg",
          "https://cdn.runrepeat.com/i/adidas/37549/adidas-running-lite-racer-adapt-3-0-scarlet-core-black-footwear-white-men-scarlet-core-black-footwear-white-cb0f-9805578-600.jpg",
          "https://cdn.runrepeat.com/i/adidas/37549/adidas-running-lite-racer-adapt-3-0-scarlet-core-black-footwear-white-men-scarlet-core-black-footwear-white-cb0f-9805584-600.jpg",
        ],
        name: "Adidas Lite Racer Adapt 3.0",
        brand: brands[2],
        price: 69,
        favorite: false,
      },
      {
        image: [
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212399M225002_1/dr-martens-black-smooth-1461-oxfords.jpg",
        ],
        name: "Dr. Martens Black Smooth 1461 Oxfords",
        brand: brands[3],
        price: 150,
        favorite: false,
      },
      {
        image: [
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221399M225018_1/dr-martens-black-smooth-1460-boots.jpg",
        ],
        name: "Dr. Martens Black Smooth 1460 Boots",
        brand: brands[3],
        price: 200,
        favorite: false,
      },
      {
        image: [
          "https://images.footlocker.com/is/image/EBFL2/4625034_a2?wid=500&hei=500&fmt=png-alpha",
          "https://images.footlocker.com/is/image/EBFL2/4625034_a1?wid=500&hei=500&fmt=png-alpha",
        ],
        name: "Timberland Waterproof Boots",
        brand: brands[4],
        price: 200,
        favorite: false,
      },
      {
        image: [
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221209F121026_1/crocs-black-classic-clogs.jpg",
        ],
        name: "Black Classic Crocs",
        brand: brands[5],
        price: 49,
        favorite: false,
      },
      {
        image: [
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221342F122002_1/balenciaga-green-crocs-edition-madame-heels.jpg",
        ],
        name: "BALENCIAGA Green Crocs Edition Madame Heels",
        brand: brands[5],
        price: 475,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/asics/27735/asics-men-s-gt-ii-shoes-10-white-monaco-blue-white-monaco-blue-0ea5-600.jpg",
          "https://cdn.runrepeat.com/i/asics/27735/asics-men-s-gt-ii-shoes-10-white-monaco-blue-white-monaco-blue-0ea5-9896893-600.jpg",
          "https://cdn.runrepeat.com/i/asics/27735/asics-men-s-gt-ii-shoes-10-white-monaco-blue-white-monaco-blue-0ea5-9896898-600.jpg",
        ],
        name: "ACICS GT II",
        brand: brands[6],
        price: 169,
        favorite: false,
      },
      {
        image: [
          "https://cdn.runrepeat.com/i/asics/36314/asics-gt-2000-9-black-directoire-blue-7-5-4e-extra-wide-black-directoire-blue-11ff-600.jpg",
          "https://cdn.runrepeat.com/i/asics/36314/asics-gt-2000-9-black-directoire-blue-7-5-4e-extra-wide-black-directoire-blue-11ff-9070921-600.jpg",
          "https://cdn.runrepeat.com/i/asics/36314/asics-gt-2000-9-black-directoire-blue-7-5-4e-extra-wide-black-directoire-blue-11ff-9070926-600.jpg",
        ],
        name: "ACICS GT 2000 9",
        brand: brands[6],
        price: 119,
        favorite: false,
      },
    ]);

    console.log(products);

    process.exit();

  })();
