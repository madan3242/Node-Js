import express from "express";

const router = express.Router();

// router.get();
/*
    URL: 127.0.0.1:4000/product/create
    Method: POST
    Fields: name, price, qty
*/
router.post('/create', async(req, res) => {
    try {
        // read data from form/ postman
        let product = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }
        let x = await
        console.log(product);
    } catch (error) {
        
    }
})

export default router;