// Ref: https://expressjs.com/
// Install: npm install express --save

//For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
// node 2-Expressjs-Framework/1.static-file.js

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//app.use('/static', express.static('public'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/hinh-vi-nhan', express.static(path.join(__dirname, 'public/hinhanh.jpg')))
app.use('/get-msg', (req, res, next) => {
    next();
}, (req, res, next) => {
    res.send('the message');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))