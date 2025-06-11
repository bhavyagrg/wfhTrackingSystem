import mongoose from "mongoose";
require("dotenv").config();

const CONNECTION_STR: string = process.env.DATABASE_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STR);
    console.log("✅ MongoDB connected");
  } catch (err) {
    if (err instanceof Error) {
      console.error("❌ MongoDB connection error:", err.message);
    } else {
      console.error("❌ MongoDB connection error:", err);
    }
    process.exit(1);
  }
};

export default connectDB;
