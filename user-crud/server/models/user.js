import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    isAdmin: {
        type: String,
        default: false,
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

let User = mongoose.model("User", userSchema);

export default User;