// Ref: https://expressjs.com/

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//const bodyParser = require('body-parser');
//app.use(bodyParser.json());

app.get('/user', function (req, res) {
    res.send('Hello World!')
  })

app.post('/user', function (req, res) {
    console.log(req);
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    console.log(req);
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    console.log(req);
    res.send('Got a DELETE request at /user')
})

// Chúng ta có thể bảo mật phương thức bằng cách
app.post('/user-test', function(req, res, next) {
    next(); // Do something here
}, function (req, res) {
    console.log(req);
    res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))