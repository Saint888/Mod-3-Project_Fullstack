const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String, 
        required: true
    },
    image: {

    }
})

const Song = mongoose.model('songs', songSchema)

module.exports = Song