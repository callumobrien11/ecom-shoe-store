// To populate the database, run this file with the terminal command:
//    node seed.js

require("dotenv").config();
require("./config/database");

const BrandModel = require("./models/Brand");
const ProductModel = require("./models/ProductSchema");
// Cool trick: if you put a function in brackets like this:
// (function brands(){})(),
// it executes immediately without needing to be called. It's called an "immediately invoked" function (IIFE).
(async function populateDB() {
  await BrandModel.deleteMany({});
  const brands = await BrandModel.create([
    { name: "Nike" },
    { name: "New Balance" },
    { name: "Adidas" },
    { name: "Converse" },
    { name: "Timberland" },
    { name: "Crocs" },
    { name: "ASICS" },
  ]);

  await ProductModel.deleteMany({});
  const products = await ProductModel.create([
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/6372431_a1?wid=520&hei=520&fmt=png-alpha",
      name: "Nike Air Max 270",
      brand: brands[0],
      price: 195,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/21978138_a1?wid=2000&hei=2000&fmt=png-alpha",
      name: "Nike Air Max 97",
      brand: brands[0],
      price: 205,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/4100890_a1?wid=520&hei=520&fmt=png-alpha",
      name: "Nike Blazer Mid '77 Vintage",
      brand: brands[0],
      price: 149,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/42200201_a1?wid=520&hei=520&fmt=png-alpha",
      name: "New Balance 2002R",
      brand: brands[1],
      price: 189,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/32741503_a1?wid=520&hei=520&fmt=png-alpha",
      name: "New Balance 327",
      brand: brands[1],
      price: 139,
      favorite: false,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/52530101_a1?wid=519&hei=519&fmt=png-alpha",
      name: "New Balance 530",
      brand: brands[1],
      price: 99,
      favorite: false,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/42116812_a1?wid=520&hei=520&fmt=png-alpha",

      name: "Adidas Ozweego",
      brand: brands[2],
      price: 129,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/41160110_a1?wid=520&hei=520&fmt=png-alpha",

      name: "adidas Superstar Winter",
      brand: brands[2],
      price: 69,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/5345038_fr?wid=520&hei=520&fmt=png-alpha",

      name: "Converse Chaussure à tige basse All Star",
      brand: brands[3],
      price: 80,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/6265000_a1?wid=520&hei=520&fmt=png-alpha",

      name: "Converse Chuck Taylor High",
      brand: brands[3],
      price: 129,

    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/4625034_a2?wid=500&hei=500&fmt=png-alpha",

      name: "Timberland Waterproof Boots",
      brand: brands[4],
      price: 200,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/99040097_a1?wid=520&hei=520&fmt=png-alpha",

      name: "Crocs Classic Clog",
      brand: brands[5],
      price: 49,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/65857769_a1?wid=520&hei=520&fmt=png-alpha",

      name: "Crocs Echo Clogs",
      brand: brands[5],
      price: 59,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/93512566_a1?wid=520&hei=520&fmt=png-alpha",

      name: "ACICS GT II",
      brand: brands[6],
      price: 169,
    },
    {
      image:
        "https://images.footlocker.com/is/image/EBFL2/4206373_a1?wid=519&hei=519&fmt=png-alpha",

      name: "ASICS® Gel Quantum 180",
      brand: brands[6],
      price: 119,
    },
  ]);

  console.log(products);

  process.exit();
})();
