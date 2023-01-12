const { isObjectIdOrHexString } = require("mongoose");
const emailValidator = require("deep-email-validator");

const Blacklist = require("../models/schemas/blacklist");
const User = require("../models/schemas/user");

async function isEmailValid(email) {
  return emailValidator.validate(email);
}

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).send({ error: "Name field must have a value" });
  }

  if (!email) {
    return res.status(400).send({ error: "Email field must have a value" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password field must have a value" });
  }

  // const { valid } = await isEmailValid(email);

  // if (!valid) {
  //   return res.status(400).send({ error: "Invalid Email" });
  // }

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "Email already registered" });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.status(201).send({ user: user });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const findUser = async (req, res) => {
  let id = req.userId;

  if (req.accountType === 10) {
    id = req.body._id;
    if (id == "" || id == undefined) {
      id = req.userId;
    }
  }

  if (!id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const findAllUsers = async (req, res) => {
  if (req.accountType !== 10) {
    return res.status(404).send({ message: "Not found" });
  }

  const users = await User.find();

  if (users.length === 0) {
    return res.status(200).send({ message: "No users registered" });
  }

  return res.status(200).send({ users });
};

const update = async (req, res) => {
  let id = req.userId;
  let { name, email, password, account } = req.body;

  if (req.accountType === 10) {
    //Funciona, mas pode ficar melhor
    id = req.body._id;
    name = undefined;
    email = undefined;
    password = undefined;
    if (id == "" || id == undefined) {
      id = req.userId;
      name = req.body.name;
      email = req.body.email;
      password = req.body.password;
      account = undefined;
    }
  } else {
    account = undefined;
  }

  if (!id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  try {
    if (!(await User.findOne({ _id: id }))) {
      return res.status(404).send({ error: "User not found" });
    }

    const testEmail = await User.findOne({email: email});

    if(testEmail && testEmail.email !== email){
      return res.status(400).send({ error: "Email already registered" });
    }

    if(!password){
      const user = await User.findOneAndUpdate({_id: id}, {name:name, email: email, account: account})
    } else {
    const user = await User.updateOne(
      { _id: id },
      { name, email, account, password }
    );
    }

    return res.status(200).send({
      message: "User has been updated",
      _id: id,
      user: name,
      email: email,
      account: account,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const erase = async (req, res) => {
  const id = req.userId;
  const usedToken = req.headers.authorization;
  const parts = usedToken.split(" ");
  const [scheme, token] = parts;

  if (!id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  try {
    if (!(await User.findOne({ _id: id }))) {
      return res.status(404).send({ error: "User not found" });
    }

    await User.deleteOne({ _id: id });
    const blacklist = await Blacklist.create({ token: token });

    return res.send({
      message: "User deleted",
      id,
      blacklist: blacklist,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  register,
  findUser,
  findAllUsers,
  update,
  erase,
};
