import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`MONGODB CONNECTED`))
    .catch((error) => {
        console.log(`MONGODB CONNECTION FAILED`);
        console.log(error);
        process.exit(1);
    })
}