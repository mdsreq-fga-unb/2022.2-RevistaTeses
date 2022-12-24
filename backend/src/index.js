require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const router = require("./routes");
const rt = require("./rt")
const connectToDb = require("./database/database");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(router);
app.use(rt)

connectToDb();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});