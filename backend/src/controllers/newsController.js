const News = require("../models/schemas/news");
const { isObjectIdOrHexString } = require("mongoose");

const create = async (req, res) => { 
  const user = req.userId;
  const { title, text, lead, banner } = req.body;
  req.body.user = user;

  if (req.accountType !== 10 && req.accountType !== 1) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  if (!title) {
    return res.status(400).send({ error: "Title field must have a value" });
  }

  if (!text) {
    return res.status(400).send({ error: "Text field must have a value" });
  }

  if (!lead) {
    return res.status(400).send({ error: "Lead field must have a value" });
  }

  if (!banner) {
    return res.status(400).send({ error: "Banner field must have a value" });
  }

  if (!user) {
    return res.status(400).send({ error: "User field must have a value" });
  }

  try {
    const news = await News.create(req.body);

    return res.status(201).send({ news });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const findOneNews = async (req, res) => { 
  const { _id } = req.params;

  if (!_id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  try {
    const news = await News.findOne({ _id: _id });

    return res.status(200).send({ news });
  } catch (error) {
    return res.status(500).send({ error: err.message });
  }
};

const findAllNews = async (req, res) => { 
  const news = await News.find();

  if (news.length === 0) {
    return res.status(200).send({ message: "There is no news" });
  }

  return res.status(200).send({ news });
};

const update = async (req, res) => {
  const { _id, title, text, lead, banner } = req.body;

  if (req.accountType !== 10 && req.accountType !== 1) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  if (!_id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  if (!title && !text && !banner && !lead) {
    return res.status(400).send({ error: "Need at least one field to update" });
  }

  try {
    const news = await News.findOne({ _id });

    if (!news) {
      return res.status(404).send({ error: "News not found" });
    }

    if (!(news.user.equals(req.userId))) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    await News.updateOne({ _id }, { title, text, lead, banner });

    return res
      .status(200)
      .send({
        message: "News has been updated",
        id: _id,
        title: title,
        text: text,
        lead: lead,
        banner: banner,
      });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const erase = async (req, res) => { 
  const { _id } = req.body;

  if (req.accountType !== 10 && req.accountType !== 1) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  if (!_id) {
    return res.status(400).send({ error: "ID does not have a value" });
  }

  if (!isObjectIdOrHexString(_id)) {
    return res.status(400).send({ error: "Invalid ID" });
  }

  try {
    const news = await News.findOne({ _id });

    if (!news) {
      return res.status(404).send({ error: "News not found" });
    }

    if (!(news.user.equals(req.userId))) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    await News.deleteOne({ _id });

    return res.status(200).send({ message: "News deleted", _id });
  } catch (error) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  create,
  findOneNews,
  findAllNews,
  update,
  erase,
};
