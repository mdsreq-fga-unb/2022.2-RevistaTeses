require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./views/routes/authRoutes");
const userRouter = require("./views/routes/userRoutes");
const newsRouter = require("./views/routes/newsRoutes");
const connectToDb = require("./models/database/database");

const app = express();

const port = process.env.PORT;

app.use(cors({
  origin: process.env.FRONT,
  credentials: true,
  exposedHeaders: ['set-cookie']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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
