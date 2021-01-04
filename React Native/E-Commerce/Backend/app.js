const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConnection = require('./database/config');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());
dbConnection();

const apiRoute = process.env.API_URL;
app.listen(4000, () => {
    console.log(`Listening on http://localhost:4000`);
});

app.use(apiRoute, require('./routes/products'));
app.use(apiRoute, require('./routes/categories'));