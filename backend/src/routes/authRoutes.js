const express = require("express");
const authController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/verifyToken");

const routes = express.Router();

routes.post("/auth", authController.login);
routes.post("/register", authController.cadastro);
routes.post("/logout", verifyToken, authController.logout);
routes.delete("/delete", verifyToken, authController.excluir);

routes.get("/test", verifyToken, (req, res) => {
  const a = req.body;
  res.status(200).send({ status: "Token válido" });
});

module.exports = routes;
