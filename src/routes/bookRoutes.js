const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  partialUpdateBook,
  updateBookStock,
  deleteBook
} = require("../controllers/bookController");

const router = express.Router();

router.post("/", createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.patch("/:id", partialUpdateBook);
router.patch("/:id/stock", updateBookStock);
router.delete("/:id", deleteBook);

module.exports = router;
