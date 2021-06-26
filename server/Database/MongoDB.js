const mongoose = require('mongoose')
// const { mongoURI } = require('./config.json')
const mongoURI = `mongodb+srv://app:app9053@cluster0.tyzev.mongodb.net/url_shortener?retryWrites=true&w=majority`

module.exports = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    return mongoose
}