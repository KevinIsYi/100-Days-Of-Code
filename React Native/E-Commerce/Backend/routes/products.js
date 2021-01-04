const { Router } = require('express');
const Product = require('../model/productSchema');

const router = Router();

router.post(`/products`, async (req, res) => {
    const product = new Product(req.body);
    res.json({
        product
    })
});

router.get(`/products`, async (req, res) => {
    const products = await Product.find();
    res.json({
        products
    })
});

module.exports = router;