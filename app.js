const express = require('express');
const app = express();

// import router
const food = require('./routes/food');

// import config
const db = require('./config/database');
db.authenticate().then(() => console.log('Berhasil konek ke database'));

// json
app.use(express.urlencoded({
    extended: true
}))

// deklarasi router dari food.js
app.use('/food', food)

// listen server
app.listen(3000, () => console.log('Port Berjalan di port 3000'))