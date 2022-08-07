const express = requite('express')
const app = express()

app.get('*', (request, response) => {
    response.send( {message: 'app funcionando en el puerto 3000'} )
})

app.listen(3000, console.log('app funcionando en el puerto 3000'))