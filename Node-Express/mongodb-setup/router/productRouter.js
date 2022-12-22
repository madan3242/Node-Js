const express = require('express');

const router = express.Router();

/*
    Name: http://localhost:4000/product
*/
router.get("/", (req, res) => {
    res.send("Product");
})

module.exports = router;