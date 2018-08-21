//"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath   C:\mongodb\data\db

require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routers/usuario'));


mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: " + process.env.PORT);
});