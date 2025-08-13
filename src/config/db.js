const mongoose = require("mongoose");

const connectDB = async () => {
  const envUri = process.env.MONGO_URI && process.env.MONGO_URI.trim();
  const mongoUri = envUri || "mongodb://127.0.0.1:27017/book_project";
  if (!envUri) {
    console.warn("⚠️  MONGO_URI not set. Falling back to mongodb://127.0.0.1:27017/book_project");
  }
  try {
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
