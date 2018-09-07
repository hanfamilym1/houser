require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')

app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

const port = 4000

app.get('/api/houses', ctrl.read)
app.post('/api/house', ctrl.create)
app.delete('/api/house/:id', ctrl.delete)

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(port, () => { console.log(`the earth is round on ${port}`) })
}).catch((err) => { console.log(err) })

