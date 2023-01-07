const express = require("express");

const newsController = require("../../controllers/newsController");
const { verifyToken } = require("../../controllers/middlewares/verifyToken");

const routes = express.Router();

routes.post("/create", verifyToken, newsController.create); 
routes.get("/find", newsController.findOneNews);
routes.get("/", newsController.findAllNews);
routes.patch("/update", verifyToken, newsController.update); 
routes.delete("/delete", verifyToken, newsController.erase); 

module.exports = routes;
