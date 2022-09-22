const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
    image: {type: String, required: true },
    name: {type: String, required: true},
    brand: {type: Schema.Types.ObjectId, ref: "Brand"},
    price: {type: Number, required: true},
    favorite: {type: Boolean},
    size:{type: [String]},
    color:{type: [String]}
}, {
    timestamps: true,
})

module.exports = mongoose.model("Product", ProductSchema)