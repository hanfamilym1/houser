require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')

app.use(bodyParser.json())

const port = 4000

app.get('/api/houses', ctrl.read)

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(port, () => { console.log(`the earth is round on ${port}`) })
}).catch((err) => { console.log(err) })

