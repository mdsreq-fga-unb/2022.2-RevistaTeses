require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isObjectIdOrHexString } = require("mongoose");

const Blacklist = require("../models/blacklist");
const User = require("../models/user");

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 300,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Campo email não foi preenchido" });
  }

  if (!password) {
    return res.status(400).send({ error: "Campo password não foi preenchido" });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "Usuário não encontrado" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: "Senha incorreta" });
  }

  user.password = undefined;

  return res.status(200).send({ user, token: generateToken({ id: user._id }) });
};

const getUser = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).send({ error: "Não foi disponibilizado um ID" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  try {
    const user = await User.findOne({ _id });

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    return res.status(200).send({ message: "Nenhum usuário encontrado" });
  }

  return res.status(200).send({ users });
};

const cadastro = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).send({ error: "Campo name não foi preenchido" });
  }

  if (!email) {
    return res.status(400).send({ error: "Campo email não foi preenchido" });
  }

  if (!password) {
    return res.status(400).send({ error: "Campo password não foi preenchido" });
  }

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "Email ja registrado" });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.status(200).send({ user: user });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { _id, name, email, account } = req.body

  if (!_id) {
    return res.status(400).send({ error: "Não foi disponibilizado um ID" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  if(!name && !email && !account){
    return res.status(400).send({ error: "Informe pelo menos um campo para atualizar"})
  }

  try {
    const user = await User.updateOne( { _id }, { name, email, account })

    return res.status(200).send({ user, _id: _id, user: name, email: email, account: account, message: "Usuário atualizado com sucesso"})
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

const excluir = async (req, res) => {
  const { _id } = req.body;
  const usedToken = req.headers.authorization;
  const parts = usedToken.split(" ");
  const [scheme, token] = parts;

  if (!_id) {
    return res.status(400).send({ error: "Não foi disponibilizado um ID" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "ID inválido" });
  }

  try {
    if (!(await User.findOne({ _id }))) {
      return res.status(500).send({ error: "Usuário não encontrado" });
    }

    await User.deleteOne({ _id });
    const blacklist = await Blacklist.create({ token: token });

    return res.send({
      message: "Deletado com sucesso",
      _id,
      blacklist: blacklist,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const logout = async (req, res) => {
  const usedToken = req.headers.authorization;
  const parts = usedToken.split(" ");
  const [scheme, token] = parts;

  try {
    const blacklist = await Blacklist.create({ token: token });

    return res.status(200).send({ blacklist: blacklist });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  login,
  cadastro,
  logout,
  excluir,
  getUser,
  getAllUsers,
  update
};
