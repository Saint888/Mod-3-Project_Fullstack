const mongoose = require('mongoose')

const Schema = mongoose.Schema

const favSchema = new Schema({
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

const Fav = mongoose.model('favorite', favSchema)

module.exports = Fav