const express = require("express");
const authController = require("./controllers/authController")

const routes = express.Router();

routes.post("/auth", authController.login);
routes.post("/register", authController.cadastro);

module.exports = routes;