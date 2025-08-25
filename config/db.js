import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

export const connectDB = async () => {
    await mongoose.connect(MONGODB_URI).then(()=>console.log("DB connected"));
}