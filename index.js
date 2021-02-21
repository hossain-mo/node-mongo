const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const cors = require("cors");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/music-recommendation');

mongoose.Promise = global.Promise;

var corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.use(express.static('public'));

app.use('/api',require('./routes/api'));

app.listen(3000, function () {
    console.log('listening on 3000')
})

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });