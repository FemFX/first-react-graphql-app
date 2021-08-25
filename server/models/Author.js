const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports = model("Author", authorSchema);
