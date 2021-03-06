const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone_number: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  relationship_status: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },

  location: {
    type: String,
    min: 5,
    max: 255,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Contact", contactSchema);
