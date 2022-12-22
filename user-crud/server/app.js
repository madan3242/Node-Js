import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import userRouter from "./routes/userRouter.js"

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.use('/user', userRouter);

export default app;