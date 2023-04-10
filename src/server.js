require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./modules/index')
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, console.log(PORT))