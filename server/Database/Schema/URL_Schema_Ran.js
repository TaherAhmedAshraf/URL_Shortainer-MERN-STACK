const mongoose = require('mongoose')

const reqString = {
    type: String,
    require: true
}

const urlSchemaRan = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    user: {
        type: String
    }
})

module.exports = mongoose.model('url', urlSchemaRan)