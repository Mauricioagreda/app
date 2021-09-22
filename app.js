const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use('/alumno', require('./endpoint/alumno.endpoint'))

app.listen(port, () => {
    console.log(`app zunnig on ${port}`)
})