require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Blacklist = require("../models/schemas/blacklist");
const User = require("../models/schemas/user");

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: '1d',
  });
};

const login = async (req, res) => { 
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Email field must have a value" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password field must have a value" });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: "Incorrect password" });
  }

  user.password = undefined;

  const token = generateToken({ id: user._id, account: user.account });
  const formattedToken = "Bearer " + token;
  
  // maxAge: (86400 * 1000),
  // secure: true,
  // sameSite: 'none',

  return res.status(200)
    .send({
      user,
      token: formattedToken,
  });
};

const logout = async (req, res) => { 
  const usedToken = req.body.token;
  const parts = usedToken.split(" ");
  const [scheme, token] = parts;

  try {
    const blacklist = await Blacklist.create({ token: token });

    return res.status(200).send({ blacklist: blacklist });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const verifyPassword = async (req, res) => {
  const userId = req.userId
  const { password } = req.body

  try{
    const user = await User.findOne({_id: userId}).select("+password")

    if(!(await bcrypt.compare(password, user.password))){
      return res.status(400).send({error: "Incorrect password"})
    }

    return res.status(200).send({message: "Correct password"})
  } catch {
    return res.status(500).send({ error: err.message });
  }
}

module.exports = {
  login,
  logout,
  verifyPassword
};
