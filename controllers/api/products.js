const Product = require('../../models/Product')
const Brand = require('../../models/Brand')


module.exports = {
    productsIndex,
    brandsIndex,
    show
}

async function productsIndex(req, res) {
    try {
        let products = await Product.find({}).populate('brand')
        res.status(200).json(products)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function brandsIndex(req, res) {
    try {
        let brands = await Brand.find({})
        res.status(200).json(brands)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function show(req, res) {
    console.log("hello", req.params.id)
    try {
        let product = await Product.findById({_id: req.params.id})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json.error
    }
}