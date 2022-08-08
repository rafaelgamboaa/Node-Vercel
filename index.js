const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Base de Datos
const uri = 'mongodb+srv://rg:rg@almuerzi.8x8rbsn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log('DB Connected'))
     .catch(e => console.log(e))

//



app.get('/', (req, res) => { 
    res.send('La pagina de inicio')
 })

app.listen(3000, console.log('app funcionando en el puerto 3000'))