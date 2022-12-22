const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/*
    USAGE : Create a product
    URL : http://localhost:5000/api/products
    Method : POST
    Fields : name, image, price, qty, info
*/
router.post('/products', async (req, res) => {
    try {
        let newProduct = {
            name : req.body.name,
            image : req.body.image,
            price : req.body.price,
            qty : req.body.qty,
            info : req.body.info,
        }
        // product exist or not
        let product = await Product.findOne({ name: newProduct.name});
        if(product){
            return res.status(401).json({
                msg: 'Product Already Exists'
            })
        }
        product = new Product(newProduct);
        product = await product.save(); // insert the product to database
        res.status(200).json({
            result: 'Product Created',
            product: product
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg : error.message
        });
    }
});

/*
    USAGE : Get all the products
    URL : http://localhost:5000/api/products
    Method : GET
    Fields : no-fields
*/
router.get('/products', async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: error.message
        })
    }
})

/*
    USAGE : Get a Single Product
    URL : http://localhost:5000/api/products/:id
    Method : GET
    Fields : no-fields
*/
router.get('/products/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg : error.message
        })
    }
})

/*
    USAGE : Update a product
    URL : http://localhost:5000/api/products
    Method : PUT
    Fields : name, image, price, qty, info
*/
router.put('/products/:id', async (req, res) => {
    let productId = req.params.id;
    try {
        let updateProduct = {
            name : req.body.name,
            image : req.body.image,
            price : req.body.price,
            qty : req.body.qty,
            info : req.body.info,
        }
        // product exist or not
        let product = await Product.findById(productId);
        if(!product){
            return res.status(401).json({
                msg: 'Product Not Found'
            })
        }
        product = await Product.findByIdAndUpdate(productId, {
            $set: updateProduct
        }, {new : true});
        res.status(200).json({
            result: 'Product Updated',
            product: product
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg : error.message
        });
    }
});

/*
    USAGE : Delete a product
    URL : http://localhost:5000/api/products
    Method : DELETE
    Fields : no-fields
*/
router.delete('/products/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        //product exist or not
        let product = await Product.findById(productId);
        if(!product){
            return res.status(401).json({
                msg: 'No Product Found'
            });
        }
        //delete
        product = await Product.findByIdAndDelete(productId);
        res.status(200).json({
            result: 'Product deleted',
            product: product
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg : error.message
        })
    }
})

module.exports = router;