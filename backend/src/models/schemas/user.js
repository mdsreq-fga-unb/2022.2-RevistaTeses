const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
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
      default: 0,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  this.account = 0;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const hash = await bcrypt.hash(this._update.password, 10);
  this._update.password = hash;
  next();
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
