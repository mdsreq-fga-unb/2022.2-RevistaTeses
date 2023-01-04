require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const newsRouter = require("./routes/newsRoutes");
const connectToDb = require("./database/database");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/views'))

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/news", newsRouter);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// })

connectToDb();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
