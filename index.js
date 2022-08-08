const express = require('express')
const mongoose = require('mongoose')
const app = express()

//DB
const uri = 'mongodb+srv://rg:rg@almuerzi.8x8rbsn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log('DB Connected'))
     .catch(e => console.log(e))
//

const Users = mongoose.model('user', new mongoose.Schema({ name: String }))

Users.create({ name: 'Jose Antonio' })

app.get('*', (req, res) => { 
    Users.find().then(x => res.send(x))
 })

app.listen(3000, console.log('app funcionando en el puerto 3000'))