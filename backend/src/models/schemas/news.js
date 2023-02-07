const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      required: true
    },
    banner: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        default: "noticia"
    }
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
