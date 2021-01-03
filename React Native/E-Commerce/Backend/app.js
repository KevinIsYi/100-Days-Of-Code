const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./database/config');
const Product = require('./model/productSchema');

require('dotenv/config');

const app = express();
app.use(bodyParser.json());
const api = process.env.API_URL;
dbConnection();

app.listen(4000, () => {
    console.log(`Listening on http://localhost:4000`);
});

app.get(`${ api }products`, (req, res) => {
    const product = new productSchema(req.body);
    console.log(product);
    res.json({
        product
    })
});