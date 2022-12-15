require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const connectToDb = require("./database/database");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

connectToDb();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});