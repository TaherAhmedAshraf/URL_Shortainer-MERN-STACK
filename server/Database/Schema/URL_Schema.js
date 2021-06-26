const mongoose = require('mongoose')

const reqString = {
    type: String,
    require: true
}

const urlSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    user: {
        type: String
    }
})

module.exports = mongoose.model('url', urlSchema)