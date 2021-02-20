const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create song schema & model
const SongSchema = new Schema({
    song_genre: {
        type: String,
    },
    song_name: {
        type: String,
    },
    singer_name: {
        type: String,
    },
    mood: {
        type: String,
    },
    occasion: {
        type: String,
    },
    year: {
        type: Number,
    },
    album: {
        type: String,
    }
});

const Song = mongoose.model('song',SongSchema);
module.exports = Song;