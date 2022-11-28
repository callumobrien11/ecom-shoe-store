const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populated queries)
require('./Brand');
const ProductSchema = require('./Product');

module.exports = mongoose.model('ProductSchema', ProductSchema);
