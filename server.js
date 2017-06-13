var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('client/build'))
// respond with hello world when a GET request is made to the homepage
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(3000, function() {
  console.log('We in this')
})
