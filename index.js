const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("La pagina de inicio")
})

app.listen(3000, console.log('app funcionando en el puerto 3000'))