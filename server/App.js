const express = require('express')
const app = express()
const port = 8080
const mongoDB = require('./Database/MongoDB')
const URL_Schema = require('./Database/Schema/URL_Schema')

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Web page not found')
})

app.post('/find', async (req, res) => {
    await mongoDB().then(async mongoose => {
        try {
            const data = await URL_Schema.findOne({
                _id: req.body._id
            })
            res.json(data)
        } finally {
            res.json(data)
            mongoose.connection.close()
        }
    })
})

app.post('/create', async (req, res) => {
    console.log(req.body)
    await mongoDB().then(async mongoose => {
        try {
            await URL_Schema.create({
                _id: req.body._id,
                url: req.body.url
            })
        } catch (error) {
            res.status('400').send("Alias already exist")
        } finally {
            mongoose.connection.close()
            res.json({ "status": "successfull" })
        }
    })
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})