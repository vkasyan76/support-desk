// console.log('Server...')

const express = require('express')
const dotenv = require('dotenv').config()
    // const PORT = 5000
const PORT = process.env.PORT || 500

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server startted on PORT ${PORT}`))