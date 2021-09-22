const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use('/alumno', require('./endpoint/alumno.endpoint'))
app.use('/', require('./endpoint/index.endpoint'))

app.set('views', './views')
app.set('view engine', 'ejs')
    

app.listen(port, () => {
    console.log(`app zunnig on ${port}`)
})