// console.log('Server...')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
    // const PORT = 5000
const PORT = process.env.PORT || 5000

// Connect to database

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // res.send('Hello')
    res.status(200).json({ message: 'Welcome to Support Desk API' })
})

// Routes:
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server startted on PORT ${PORT}`))