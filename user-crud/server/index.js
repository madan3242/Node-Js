import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/configDatabase.js";

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    connectDb();
    console.log(`SERVER RUNNING http://${process.env.HOSTNAME}:${process.env.PORT}`);
});