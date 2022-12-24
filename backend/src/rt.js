const express = require("express");
const authController = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");

const routes = express.Router();

routes.use(verifyToken);

routes.get("/test", (req, res) => {
    res.status(200).send({status: "ok"});
})
routes.post("/logout", authController.logout);

module.exports = routes;