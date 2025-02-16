const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid email address"],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[A-Za-z\s]+$/.test(v);
        },
        message: "City name should contain only letters and no numbers",
      },
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{5}-\d{4}$/.test(v);
        },
        message: "Invalid zip code format (format should be 00000-0000)",
      },
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: "Invalid phone number format (should be 1-000-000-0000)",
    },
  },
  website: {
    type: String,
    required: true,
    validate: [validator.isURL, "Invalid URL format"],
  },
});

module.exports = mongoose.model("User", userSchema);
