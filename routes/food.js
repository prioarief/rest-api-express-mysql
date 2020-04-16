const express = require('express');
const router = express.Router();
const food = require('../models/Food');

// route create food
router.post('/create', async (req, res) => {
    try {
        // destructuring object
        const {
            name,
            prize
        } = req.body;

        // initialize models database (Food.js)
        const newFood = new food({
            name,
            prize
        });

        // await = menjalankan kode yang ada di models food
        await newFood.save();

        // respon
        res.json(newFood)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server eror')
    }
})

// route get All food
router.get('/', async (req, res) => {
    try {
        // mengambil data
        const getFood = await food.findAll({})

        // respon
        res.json(getFood)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server eror')
    }
})
// export modul agar bisa dipakai di app.js
module.exports = router;