const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("DB Connected");
    
    } catch (e) {
        console.log(e);
        throw new Error('Cannot connect to DB');
    }
}

module.exports = { 
    dbConnection
}