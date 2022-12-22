import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'

import router from './routes/productRouter.js'

dotenv.config({ path: './config/config.env'})

const app = express();

app.use(cors());
app.use(morgan('tiny'))

//how to read form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//create root request
app.get('/', (req, res) => {
    try {
        res.send('Running')
    } catch (error) {
        console.log(error);
    }
})

//configure rotes
app.use('/product', router)

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const MONGODB_URL = process.env.MONGODB_URL;

//connecting to mongodb
mongoose.connect(MONGODB_URL)
        .then((response) => {
            console.log('MONOGODB CONNECTION SUCCESSFUL');
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        })

app.listen(PORT, HOSTNAME, (error) => {
    if(error) throw error;
    console.log(`Server running http://${HOSTNAME}:${PORT}`);
})