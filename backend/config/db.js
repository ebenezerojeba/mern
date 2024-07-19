import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ebenezer:080211@cluster0.ktwgj0b.mongodb.net/food-del').then(()=>console.log("DB connected"));
} 
