const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('alumno')
})

module.exports = router