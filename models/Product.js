const Schema = require('mongoose').Schema;

const Product = new Schema ({
    image: {type: String, required: true },
    name: {type: String, required: true},
    brand: {type: Schema.Types.ObjectId, ref: "Brand"},
    price: {type: Number, required: true},
}, {
    timestamps: true,
})

module.exports = Product;