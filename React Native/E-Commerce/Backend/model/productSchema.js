const { Schema, model } = require('mongoose');

const productSchema = Schema({
    name: String,
    image: String,
    countInStock: Number
});

module.exports = model('Product', productSchema);