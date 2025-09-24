import mongoose, { mongo } from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    profile: { type: String },
    banner: { type: String },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
    taq: { type: Boolean, default: false }
});

export default mongoose.models.User || model("User", userSchema);