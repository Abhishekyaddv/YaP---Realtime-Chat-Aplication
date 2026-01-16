import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async () => {
  try {
   const conn = await mongoose.connect(ENV.MONGO_URL);
    console.log("MONGODB CONNECTED SUCCESFULLY: ", conn.connection.host);

  } catch (error){
    console.log("ERROR CONNECTING TO MONGODB", error);
    process.exit(1); //1 status code means fail, 0 means Success
    }
  }