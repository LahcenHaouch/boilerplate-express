var express = require('express');
var app = express();

console.log('Hello World')

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res) {
  const message = 'Hello json'

  process.env.MESSAGE_STYLE

  res.json({
    message: process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
  })
})

app.use(express.static(__dirname + '/public'))






























 module.exports = app;
