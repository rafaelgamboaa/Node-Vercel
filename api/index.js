const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express()

// USE ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://fcc-mongodb:mongodb@cluster0.mpo46.mongodb.net/?retryWrites=true&w=majority'

// CORS
app.use(cors())

//BODY-PARSER
app.use(bodyParser.json())

//DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log('DB Connected'))
     .catch(e => console.log(e))
//

app.use('/api/meals', meals)
app.use('/api/orders', orders)

app.listen(PORT, console.log(`app funcionando en el puerto ${PORT}`))