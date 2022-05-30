require('dotenv').config()

const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
// const DB_HOST = 'localhost'
// const DB_NAME = 'postBase'
// const DB_PORT = 27017

// const dbConnectionUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`


const dbConnectionUrl = `${process.env.mongoUrl}`

function dbConnect() {
    mongoose.connect(dbConnectionUrl, options, (err) => {
        if (err) return console.error(err)
        return console.log('К базе подключились')
    })

}

module.exports = dbConnect