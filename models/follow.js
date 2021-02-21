const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create song schema & model
const followSchema = new Schema({
    username: {
        type: String
    },
    followed: {
        type: Schema.Types.ObjectId,
        ref: 'users'
        
    },
    
});

const Follow = mongoose.model('follows',followSchema);
module.exports = Follow;