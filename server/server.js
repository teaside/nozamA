const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to th db")
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, useNewUrlParser: true} ));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({
        user: "Dima"
    });
});

app.listen(config.port, (err) => {
    console.log('Server liten on port', config.port);
});