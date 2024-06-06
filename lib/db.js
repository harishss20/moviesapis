// mongodb+srv://harishss20off:fPjowVUUAHsDs5xm@cluster0.vap4iop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("mongodb connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
