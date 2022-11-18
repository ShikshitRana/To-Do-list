import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${response.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default ConnectDB;
