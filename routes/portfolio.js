const express = require('express');
const router = express.Router();
const siswa = require('../models/Portfolio');

router.get('/', async (req, res) => {
    try {
        // const { project_name, link } = req.body
        res.send('project_name')
    } catch (err) {
        
    }
})


module.exports = router;