const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
    expireAt:{
        type: Date,
        default: Date.now(),
        expires: 300
    },
    token:{
        type: String
    }
});

const Blacklist = mongoose.model("Blacklist", blacklistSchema);

module.exports = Blacklist;