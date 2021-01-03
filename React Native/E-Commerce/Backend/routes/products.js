const { Router } = require('express');
const Product = require('../model/productSchema');

const router = Router();

const api = process.env.API_URL;

router.post(`${ api }products`, async (req, res) => {
    const product = new Product(req.body);
    console.log(product);
    res.json({
        product
    })
});

router.get(`${ api }products`, async (req, res) => {
    const products = await Product.find();
    res.json({
        products
    })
});

module.exports = router;