const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
// import routes
const authRoute = require('./routes/auth')

dotenv.config();

// Connect to db
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("Connected to db")
})


// middlewares
app.use(express.json())

// Route middlewares
app.use('/api/user', authRoute)

app.listen(3000, () => {
  console.log("Running on port 3000")
})