const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    account: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", async (next) => {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const user = mongoose.model("User", userSchema);

module.exports = user;