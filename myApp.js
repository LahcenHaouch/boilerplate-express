var express = require('express');
var app = express();

console.log('Hello World')

app.use(function(req, res, next) {
  const method = req.method
  const path = req.path
  const ip = req.ip

  console.log(`${method} ${path} - ${ip}`)

  next()
})

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

app.get('/now', function(req, res, next) {
  req.time = new Date().toString()
  next()
}, function(req, res) {
  const {time} = req

  res.json({
    time,
  })
})

app.use(express.static(__dirname + '/public'))






























 module.exports = app;
