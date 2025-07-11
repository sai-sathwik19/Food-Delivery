import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sathwik1977:sathwik19@cluster0.sb9mtbg.mongodb.net/Food-Delivery').then(()=>console.log("DB connected"));
}