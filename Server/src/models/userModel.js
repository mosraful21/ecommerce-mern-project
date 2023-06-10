const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is Required"],
      trim: true,
      minlength: [2, "Name length is too small"],
      maxlength: [50, "Name length is too Big"],
    },

    email: {
      type: String,
      required: [true, "User name is Required"],
      trim: true,
      unique: true,
      lowercase: true,
      // validate: {
      //   validator: function (value) {
      //     return /^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.text(value);
      //   },
      //   message: "Please enter a valid email",
      // },
    },

    password: {
      type: String,
      required: [true, "User password is Required"],
      minlength: [6, "Password atlist 6 characters"],
      set: (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
    },

    image: {
      type: String,
      default: defaultImagePath,
    },

    address: {
      type: String,
      required: [true, "User address is Required"],
    },

    phone: {
      type: String,
      required: [true, "User phone number is Required"],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);
module.exports = User;
