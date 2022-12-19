require("dotenv").config();
const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (params = {}) => {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 300,
    });

}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email }).select("+password");

    if(!user){
        return res.status(400).send("Usuário não encontrado");
    }

    if(!(await bcrypt.compare(password, user.password))){
        return res.status(400).send("Senha incorreta");
    }

    user.password = undefined;

    return res.status(200).send({user, token: generateToken({id: user._id})});
}

module.exports = {
    login,
}