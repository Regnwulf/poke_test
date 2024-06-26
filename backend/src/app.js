const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)
app.use(express.json())
app.use('/api', routes)

module.exports = app
