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
        enum : ['Happiness','Sadness', 'Fear', 'Disgust', 'Anger', 'Surprise']
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

const Song = mongoose.model('songs',SongSchema);
module.exports = Song;