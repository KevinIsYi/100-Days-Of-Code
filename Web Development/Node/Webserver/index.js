const express = require('express');
const dbConnection = require('./database/config');
require('./config/config');

const app = express();

app.use(express.json());
dbConnection();

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${ process.env.PORT }`);
});