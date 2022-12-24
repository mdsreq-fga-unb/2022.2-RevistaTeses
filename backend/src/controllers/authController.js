require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Blacklist = require("../models/blacklist");

const User = require("../models/user");

const generateToken = (params = {}) => {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 300,
    });

}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return res.status(400).send({error: "Usuário não encontrado"});
    }

    if(!(await bcrypt.compare(password, user.password))){
        return res.status(400).send({error: "Senha incorreta"});
    }

    user.password = undefined;

    return res.status(200).send({user, token: generateToken({id: user._id})});
}

const cadastro = async (req, res) => {
    const { email } = req.body

    try {
        if(await User.findOne({ email })){
            return res.status(400).send({error: "Email ja registrado"})
        }

        const user = await User.create(req.body)
        
        user.password = undefined;

        return res.status(200).send({user: user})
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const logout = async (req, res) => {
    const usedToken = req.headers.authorization
    const parts = usedToken.split(" ");
    const [scheme, token] = parts;

    try {
        const blacklist = await Blacklist.create({token: token});

        return res.status(200).send({blacklist: blacklist});
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = {
    login,
    cadastro,
    logout
}