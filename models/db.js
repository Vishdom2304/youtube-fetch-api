// Importing the required files and modules.
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

// connecting to mongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlparser: true }, (err) => {
    if (!err) {
        console.log('Connected to Mongo Successfully.');
    } else {
        console.log('Mongo Connection Failed', err);
    }
});
require('./videoModel');
