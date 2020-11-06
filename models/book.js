const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
    unique: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
