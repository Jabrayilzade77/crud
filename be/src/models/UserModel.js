import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: String,
  });
  
export  const UserModel = mongoose.model("Kitten", userSchema);