const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = 4000

app.listen(port,()=>{console.log(`the earth is round on ${port}`)})
