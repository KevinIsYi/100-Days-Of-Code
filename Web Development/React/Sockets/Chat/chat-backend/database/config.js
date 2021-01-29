const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
    }   
}

module.exports = {
    dbConnection
}