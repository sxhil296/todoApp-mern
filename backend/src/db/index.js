import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log(
      "MONGO_DB CONNECTED! Host : ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("DB CONNECTION ERROR", error);
  }
};

export default connectDB;
