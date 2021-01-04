const { Router, query } = require('express');
const Category = require('../model/categorySchema');
const Product = require('../model/productSchema');

const router = Router();

router.post(`/products`, async (req, res) => {
    try {
        const { body, body:{ category } } = req;

        const selectedCategoryId = await Category.findById(category);

        if (!selectedCategoryId) {
            return res.status(400).json({
                ok: false,
                message: "Category doesn't exist"
            });
        }

        const newProduct = new Product(body);
        await newProduct.save();

        res.status(201).json({
            ok: true,
            newProduct
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.get(`/getproductbyid/:id`, async (req, res) => {
    try {
        const { params:{ id } } = req;
        const product = await Product.findById(id).populate('category');

        if (!product) {
            return res.status(404).json({
                ok: false,
                message: "Product doesn't exist"
            });
        }
        res.json({
            ok: true,
            product
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.get(`/products`, async (req, res) => {
    try {

        const { query:{ categories }} = req;
        let filter = {};
        console.log(categories);
        if (categories) {
            filter = {category:  categories.split(',')};
        }

        const products = await Product.find(filter).populate('category');
        //const products = await Product.find().select('name brand -_id').populate('category'); // Will just show name and brand

        res.json({
            ok: true,
            products
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.put('/product/:id', async (req, res) => {
    try {
        const { params:{ id }, body, body:{ category } } = req;

        console.log(body);
        const selectedCategoryId = await Category.findById(category);
        if (!selectedCategoryId) {
            return res.status(400).json({
                ok: false,
                message: "Category doesn't exist"
            });
        }

        const product = await Product.findByIdAndUpdate(id, body, {
            new: true
        });

        if (!product) {
            return res.status(404).json({
                ok: false,
                message: "Product doesn't exist"
            });
        }
        res.json({
            ok: true,
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.delete('/product/:id', async (req, res) => {
    try {
        const { params:{ id } } = req;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                ok: false,
                message: "Product doesn't exist"
            });
        }
        res.json({
            ok: true,
            message: 'Product was deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/product/get/count', async (req, res) => {
    try {
        const productCount = await Product.countDocuments((count) => count);
        res.json({
            ok: true,
            productCount
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/product/get/featured/', async (req, res) => {
    try {
        const featuredProducts = await Product.find({ isFeatured: true }).populate('category');
        res.json({
            ok: true,
            featuredProducts
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

module.exports = router;