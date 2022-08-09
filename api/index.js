const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express()

// CORS
app.use(cors())

//BODY-PARSER
app.use(bodyParser.json())

//DB
const uri = 'mongodb+srv://rg:rg@almuerzi.8x8rbsn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log('DB Connected'))
     .catch(e => console.log(e))
//

app.use('/api/meals', meals)
app.use('/api/orders', orders)

app.listen(3000, console.log('app funcionando en el puerto 3000'))