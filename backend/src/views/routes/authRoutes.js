const express = require("express");
const authController = require("../../controllers/authController");
const { verifyToken } = require("../../controllers/middlewares/verifyToken");

const routes = express.Router();

routes.post("/login", authController.login);
routes.post("/logout", verifyToken, authController.logout); 
routes.post("/verify", verifyToken, authController.verifyPassword)

routes.get("/test", verifyToken, (req, res) => {
  // console.log(req)
  return res.status(200).send({ user: req.userId, account: req.accountType });
});

module.exports = routes;
