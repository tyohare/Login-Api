const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000;
const {errorHandler} = require('./Middleware/errorMiddleware')
const connectDB = require('./config/db')


connectDB()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./Routes/userRoutes'))


//Overwrite default express error handler
//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on Port: ${port}`))
