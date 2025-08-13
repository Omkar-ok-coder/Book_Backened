require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");   

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/orders", orderRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Book Project API is running!" });
});

// Start Server after DB connects
const PORT = process.env.PORT || 5000;

// For local development
if (process.env.NODE_ENV !== "production") {
  (async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    } catch (error) {
      console.error("❌ Server startup failed:", error);
      process.exit(1);
    }
  })();
}

// For Vercel deployment
module.exports = app;
