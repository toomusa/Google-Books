const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: new Date(Date.now()) }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
