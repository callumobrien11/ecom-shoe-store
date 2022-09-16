const express = require('express')
const router = express.Router()
const productsCtrl = require("../../controllers/api/products")

router.get('/products', productsCtrl.productsIndex)
router.get('/brands', productsCtrl.brandsIndex)

module.exports = router;
