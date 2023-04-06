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
    img_src: {

    },
    src: {

    },
   
    favorite: [{type: Boolean, default: false }]
})

const Song = mongoose.model('songs', songSchema)

module.exports = Song