const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});
module.exports = model("Book", bookSchema);
