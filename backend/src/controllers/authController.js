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

  return res.status(200).cookie("Authorization", formattedToken, {maxAge: (86400 * 1000)}).send({
    user,
    token: token,
  });
};

const logout = async (req, res) => { 
  const usedToken = req.cookies.Authorization;
  const parts = usedToken.split(" ");
  const [scheme, token] = parts;

  try {
    const blacklist = await Blacklist.create({ token: token });

    return res.status(200).clearCookie("Authorization").send({ blacklist: blacklist });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  login,
  logout,
};
