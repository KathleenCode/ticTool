import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoUri = process.env.MONGO_URI;


const connectDb = async() => {
    try {
        const connected = await mongoose.connect(mongoUri);
        if(connected) {
            console.log("mongoDB connected successfully")
        }
    } catch(err) {
        console.log(err)
    }
}

export default connectDb;