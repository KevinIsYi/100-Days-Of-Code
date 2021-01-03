const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConnection = require('./database/config');
require('dotenv/config');

app.use(cors());
const app = express();
app.use(bodyParser.json());
dbConnection();

app.listen(4000, () => {
    console.log(`Listening on http://localhost:4000`);
});

app.use(require('./routes/products'));