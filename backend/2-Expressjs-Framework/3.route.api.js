// Ref: https://expressjs.com/

const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const route = require('./3.route')

app.use('/api', route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))