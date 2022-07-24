const express = require('express')
const dotenv = require('dotenv').config
const port = process.env.port

const app = express()

app.listen(port, () => console.log(`server started on port  ${port}`))