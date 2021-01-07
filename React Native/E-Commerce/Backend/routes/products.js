const { Router, query } = require('express');
const Category = require('../model/categorySchema');
const Product = require('../model/productSchema');
const multer = require('multer');

const router = Router();

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { mimetype } = file;
        const isValidFormatFile = FILE_TYPE_MAP[mimetype];
        const uploadError = isValidFormatFile ? null : new Error('Invalid image format');
        
        cb(uploadError, 'public/uploads');
    },
    filename: (req, file, cb) =>  {
        const fileName = file.originalname.replace(' ', '-');
        const { mimetype } = file;

        const extension = FILE_TYPE_MAP[mimetype];

        cb(null, `${ fileName }-${ Date.now() }.${ extension }`);
    }
});

const uploadOptions = multer({ storage })

router.post(`/products`, uploadOptions.single('images'), async (req, res) => {
    try {
        const { body, body:{ category }, protocol, file } = req; // filename is coming from multer cb(null, filename + '-' + Date.now())

        if (!file) {
            return res.status(400).json({
                ok: false,
                message: "Need Product Image"
            });
        }

        const { filename } = file;

        console.log("body recibido: ", body);
        const baseImagePath = `${ protocol }://${ req.get('host') }/public/uploads/${ filename }`;
        body.images = baseImagePath;

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

router.get(`/products/getproductbyid/:id`, async (req, res) => {
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

router.put('/products/:id', async (req, res) => {
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

router.delete('/products/:id', async (req, res) => {
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

router.get('/products/get/count', async (req, res) => {
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

router.get('/products/get/featured/', async (req, res) => {
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

router.put(
    '/products/gallery-images/:id', 
    uploadOptions.array('images', 10), 
    async(req, res) => { // max ten files

    try {
        const { params:{ id } } = req;
        
        const { files, protocol } = req;
        let imagesPaths = [];

        
        if (files) {
            const baseImagePath = `${ protocol }://${ req.get('host') }/public/uploads/`;
            files.map(({ filename }) => {
                imagesPaths.push(`${ baseImagePath }${ filename }`);
            });
        }

        const product = await Product.findByIdAndUpdate(id, 
        {
            images: imagesPaths
        },
        {
            new: true
        });

        res.json({
            ok: true,
            product
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed'
        });
    }
})

module.exports = router;