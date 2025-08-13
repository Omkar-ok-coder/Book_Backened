const Author = require("../models/Author");

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const { limit = 10, page = 1, nationality } = req.query;
    const filter = {};
    if (nationality) filter.nationality = nationality;

    const authors = await Author.find(filter)
      .limit(parseInt(limit))
      .skip((page - 1) * limit);
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAuthor) return res.status(404).json({ error: "Author not found" });
    res.json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) return res.status(404).json({ error: "Author not found" });
    res.json({ message: "Author deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
