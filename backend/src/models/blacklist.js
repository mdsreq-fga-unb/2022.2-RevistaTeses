const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
    expireAt: {
      type: Date,
      default: new Date(new Date().valueOf() + 360 * 1000),
      expires: 60,
    },
  },
  { timestamps: true }
);

const Blacklist = mongoose.model("Blacklist", blacklistSchema);

module.exports = Blacklist;
