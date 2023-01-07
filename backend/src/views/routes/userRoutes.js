const express = require("express");

const userController = require("../../controllers/userController");
const { verifyToken } = require("../../controllers/middlewares/verifyToken");

const routes = express.Router();

routes.post("/register", userController.register);
routes.get("/", verifyToken, userController.findUser); 
routes.get("/all", verifyToken, userController.findAllUsers); 
routes.patch("/update", verifyToken, userController.update); 
routes.delete("/delete", verifyToken, userController.erase); 

module.exports = routes;
