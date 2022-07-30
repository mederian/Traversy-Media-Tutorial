const { json } = require('express')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.port

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port  ${port}`))

/*
NODE_ENV = develpment
PORT = 5000
MONGO_URI = mongodb+srv://olemsn:1ostePaven1@olemsncluster.ybszmux.mongodb.net/mernapp?retryWrites=true&w=majority
JWT_SECRET = abc123
*/