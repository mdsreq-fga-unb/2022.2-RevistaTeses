const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.DB_URI;

const connectToDb = () => {
    mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connected to Database"))
        .catch((error) => console.log(error));
};

module.exports = connectToDb;