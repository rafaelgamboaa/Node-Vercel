const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express()

// Use environment variables
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://fcc-mongodb:mongodb@cluster0.mpo46.mongodb.net/?retryWrites=true&w=majority'

// CORS
app.use(cors())

// Use body parse
app.use(bodyParser.json())

// Connection Database
mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(e => console.log(e))

// Routes
app.use('/api/meals', meals)
app.use('/api/orders', orders)

app.listen(PORT, console.log(`App funcionando en el puerto ${PORT}`))