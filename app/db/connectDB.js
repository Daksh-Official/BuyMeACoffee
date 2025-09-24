import mongoose from "mongoose";

const connection = async () => {
    try {
        const connector = await mongoose.connect(process.env.URI);
        console.log("Database connected successfully");
        return connector;
    }
    catch (err) {
        console.log("error:", err);
    }
    return;
}

export default connection;
