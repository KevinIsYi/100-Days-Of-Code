const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConnection = require('./database/config');
const { authJwt } = require('./helpers/jwt');
const { errorHandler } = require('./helpers/error-handler');

require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(authJwt());
app.use('/public/uploads', express.static(`${ __dirname }/public/uploads`));
app.use(errorHandler);
dbConnection();

const apiRoute = process.env.API_URL;
app.listen(4000, () => {
    console.log(`Listening on http://localhost:4000`);
});

app.use(apiRoute, require('./routes/products'));
app.use(apiRoute, require('./routes/categories'));
app.use(apiRoute, require('./routes/users'));
app.use(apiRoute, require('./routes/orders'));