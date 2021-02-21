const express = require('express');

const router = express.Router();

const Song = require('../models/song');
const User = require('../models/user');
const Follow = require('../models/follow');

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

router.get('/users',function(req,res,next){
    User.find({}).then(function(users){
        res.send(users);
    }).catch(next);
});

router.post('/users',function(req,res,next){
    User.create(req.body).then(function(users){
        Song.find({'mood' : req.body.mood}, '-_id song_name').then(function(songs){
            res.send(songs.map( elements => elements.song_name));
        }).catch(next);
    }).catch(next);
});

router.post('/follows',function(req,res,next){
    Follow.create(req.body).then(function(follows){
        res.send(follows);
    }).catch(next);
});

router.get('/follows',function(req,res,next){
    // res.send(req.query.user_name)
    Follow.find({'username' : req.query.user_name}).populate("followed").then(function(follows){
        const moods = follows.map( element => element.followed.mood)
        Song.find({}, '-_id song_name').where('mood').in(moods).then(function(songs){
            res.send(songs.map( elements => elements.song_name));
        }).catch(next);
    }).catch(next);
});

module.exports = router;
