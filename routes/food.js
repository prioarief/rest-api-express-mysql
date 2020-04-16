const express = require('express');
const router = express.Router();
const food = require('../models/Food');

// route create food
router.post('/create', async (req, res) => {
    try {
        // destructuring object
        const { name, prize } = req.body;

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

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const getSpecificFood = await food.findOne({
            where: {
                id: id
            }
        });

        res.json(getSpecificFood)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await food.destroy({
            where: {
                id: id
            }
        })
        await deleteUser;
        res.json(`data dengan id ${id} berhasil di hapus`)
    } catch (error) {
        console.log(err.message);
        res.status(500).send('server error');
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const { name, prize } = req.body;
        const id = req.params.id;

        const updateUser = await food.update({
            name,
            prize
        },
        {
            where : {id:id}
        });

        await updateUser;
        res.json('Data Berhasil Di edit')
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message)
    }
})


module.exports = router;