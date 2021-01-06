const { Router } = require('express');
const Category = require('../model/categorySchema');
const router = Router();

router.get('/categories', async (req, res) => {

    try {
        const categoryList = await Category.find();

        res.status(200).json({
            ok: true,
            categoryList
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/categories/:id', async (req, res) => {

    try {
        const { params:{ id } } = req;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                ok: false,
                message: "Category doesn't exist"
            });
        }

        res.json({
            ok: true,
            category
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.post('/categories', async (req, res) => {
    
    try {
        const { body } = req;
        const category = new Category(body);

        await category.save();
        res.status(201).json({
            ok: true,
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
});

router.delete('/categories/:id', async (req, res) => {
    try {
        const { params:{ id } } = req;
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({
                ok: false,
                message: "Category doesn't exist"
            });
        }
        res.json({
            ok: true,
            message: 'Category was deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.put('/categories/:id', async (req, res) => {
    try {
        const { params:{ id }, body } = req;
        const category = await Category.findByIdAndUpdate(id, body, {
            new: true
        });

        console.log(body);
        if (!category) {
            return res.status(404).json({
                ok: false,
                message: "Category doesn't exist"
            });
        }
        res.json({
            ok: true,
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

module.exports = router;