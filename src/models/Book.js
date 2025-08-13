const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  price: Number,
  stock: Number,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
