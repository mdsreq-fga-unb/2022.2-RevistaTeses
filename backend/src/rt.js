const express = require("express");
const authController = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");

const routes = express.Router();

routes.use(verifyToken);

routes.get("/test", (req, res) => {
    const a = req.body
    res.status(200).send({status: "Token válido"});
})
routes.post("/logout", authController.logout);
routes.delete("/delete", authController.excluir);

module.exports = routes;