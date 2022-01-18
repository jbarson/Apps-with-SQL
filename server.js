const express = require('express')
const { browse } = require('./query')

const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7567

app.get('/books', (_req, res) => {
  browse(console.log)
  browse((rows) => res.send(rows))
})

app.get('/test', (req, res) => {
  res.send("so long space cowboy")
})



app.listen(PORT, () => console.log(`running on port ${PORT}`))