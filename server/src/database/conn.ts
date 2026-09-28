import "dotenv/config";
import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string, {
      dbName: process.env.DATABASE_NAME as string,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default conn;
