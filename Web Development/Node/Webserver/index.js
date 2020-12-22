const express = require('express');
const dbConnection = require('./database/config');
require('./config/config');

const app = express();

app.use(express.json());
app.use(require('./routes/usuario'));
dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${ process.env.PORT }`);
});