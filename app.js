const express = require('express');
const app = express();

// import router
const food = require('./routes/food');
const portfolio = require('./routes/portfolio');

// import config
const db = require('./config/database');
db.authenticate().then(() => console.log('Berhasil konek ke database'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next()
});

// json
app.use(express.urlencoded({
    extended: true
}))

// deklarasi router dari food.js
app.use('/food', food);
app.use('/my-portfolio', portfolio);

// listen server
app.listen(7000, () => console.log('Port Berjalan di port 7000'))