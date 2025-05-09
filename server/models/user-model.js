const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
