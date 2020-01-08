const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Called API: ", req.path)
    next()
})

router.get('/user', function (req, res) {
    res.send('Hello World!')
  })

router.post('/user', function (req, res) {
    console.log(req);
    res.send('Got a POST request')
})

router.put('/user', function (req, res) {
    console.log(req);
    res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
    console.log(req);
    res.send('Got a DELETE request at /user')
})

module.exports = router;