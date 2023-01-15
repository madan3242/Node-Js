const express = require('express');
const Razorpay = require('razorpay');

const app = express();
app.use(express.static("./public"))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

app.post('/order', async (req, res) => {
    const amount = req.body.amount;

    var instance = new Razorpay({ 
        key_id: '', 
        key_secret: '' 
    })

    var options = {
        amount: amount * 100,
        currency: "INR",
        receipt: "order_rcptid_11",
    };

    const myOrder = await instance.orders.create(options);

    res.status(200).json({
        success : true,
        amount,
        order: myOrder,
    })
})


app.listen(4000, (error) => {
    if(error) throw error;
    console.log(`SERVER RUNNING http://localhost:4000`);
})