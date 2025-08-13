const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  quantity: Number,
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
