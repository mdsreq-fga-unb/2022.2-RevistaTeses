require("dotenv").config();
const jwt = require("jsonwebtoken");
const Blacklist = require("../../models/schemas/blacklist");

const verifyToken = async (req, res, next) => {
    const authCookie = req.cookies

    if(!authCookie.Authorization){
        return res.status(401).send({error: "No token provided"});
    }

    const parts = authCookie.Authorization.split(" ");

    if (parts.length !== 2) {
        return res.status(401).send({ error: "Token error" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token malformatted" });
    }

    if(await Blacklist.findOne({ token })){
        return res.status(401).send( {error: "Token already used"} );
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: "Token invalid" });
        }

        req.userId = decoded.id;
        req.accountType = decoded.account;
        return next();
    });
}

module.exports = {
    verifyToken
}