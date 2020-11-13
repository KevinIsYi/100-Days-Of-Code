const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./database/config');

dotenv.config();

const { PORT } = process.env;

// Create express server
const app = express();

// Database
dbConnection();


app.use(express.static('public'));

// Lecture and parse of body
app.use( express.json() );

app.use('/api/auth', require('./routes/auth'));


// Listen petitions
app.listen(PORT, () => { // Port, callback
    console.log(`Server is running on: ${ PORT }`);
});