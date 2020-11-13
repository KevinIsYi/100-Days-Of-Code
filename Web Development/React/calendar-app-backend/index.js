const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbConnection } = require('./database/config');

dotenv.config();

// Create express server
const app = express();

// Database
dbConnection();


//CORS
app.use(cors());

app.use(express.static('public'));

// Lecture and parse of body
app.use( express.json() );

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Listen petitions
app.listen(process.env.PORT, () => { // Port, callback
    console.log(`Server is running on: ${ process.env.PORT }`);
});