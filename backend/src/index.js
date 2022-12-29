require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const connectToDb = require("./database/database");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authRouter);

connectToDb();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
