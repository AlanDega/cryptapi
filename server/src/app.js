const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express() // create your express app

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


app.get('/preciosBitso', (req, res) => {
    res.send([
      'precio BTC',
      'precio ETH'
    ])
  })

app.listen(8081);