const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  coordinates: { type: Array, required: true }
});

module.exports = mongoose.model("images", imageSchema);
