const express = require("express");

const userController = require("../../controllers/userController");
const { verifyToken } = require("../../controllers/middlewares/verifyToken");

const routes = express.Router();

routes.post("/register", userController.register);
routes.post("/", verifyToken, userController.findUser); 
routes.post("/all", verifyToken, userController.findAllUsers); 
routes.patch("/update", verifyToken, userController.update); 
routes.post("/delete", verifyToken, userController.erase); 

module.exports = routes;
