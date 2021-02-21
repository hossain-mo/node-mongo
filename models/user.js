const uniqueValidator = require('mongoose-unique-validator')

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create song schema & model
const UserSchema = new Schema({
    username: {
        type: String,
        unique : true
    },
    birthdate: {
        type: Date,
    },
    gender: {
        type: String,
        enum : ['Male','Female']
    },
    mood: {
        type: String,
        enum : ['Happiness','Sadness', 'Fear', 'Disgust', 'Anger', 'Surprise']
    },
    nationality: {
        type: String,
    },
    education: {
        type: String,
    }
});

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('users',UserSchema);
module.exports = User;