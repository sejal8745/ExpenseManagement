const mongoose = require("mongoose");

//schema sdesign
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },

    email: {
      type: String,
      required: [true, "email is required ans should be unique"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "passwords is required"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
