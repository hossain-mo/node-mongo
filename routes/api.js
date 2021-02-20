const express = require('express');

const router = express.Router();

const Song = require('../models/song');

router.get('/songs',function(req,res,next){
    Song.find({}).then(function(songs){
        res.send(songs);
    }).catch(next);
});

router.post('/songs',function(req,res,next){
    Song.create(req.body).then(function(songs){
        res.send(songs);
    }).catch(next);
});

module.exports = router;
