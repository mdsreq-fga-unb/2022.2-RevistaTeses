const express = require("express");
const userController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/verifyToken");

const routes = express.Router();

routes.post("/auth", userController.login);
routes.post("/register", userController.cadastro);
routes.post("/logout", verifyToken, userController.logout);
routes.delete("/delete", verifyToken, userController.excluir);
routes.get("/user", verifyToken, userController.getUser);
routes.get("/users", verifyToken, userController.getAllUsers);
routes.post("/update", verifyToken, userController.update);

routes.get("/test", verifyToken, (req, res) => {
  const a = req.body;
  res.status(200).send({ status: "Token válido" });
});

module.exports = routes;
