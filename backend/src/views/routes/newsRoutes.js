const express = require("express");

const newsController = require("../../controllers/newsController");
const { verifyToken } = require("../../controllers/middlewares/verifyToken");

const routes = express.Router();

routes.post("/create", verifyToken, newsController.create); 
routes.get("/find/:_id", newsController.findOneNews);
routes.get("/", newsController.findAllNews);
routes.post("/findByUser", verifyToken, newsController.findNewsById) 
routes.patch("/update", verifyToken, newsController.update); 
routes.delete("/delete", verifyToken, newsController.erase);

module.exports = routes;
