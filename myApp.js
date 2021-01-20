var express = require('express');
var bodyParser = require('body-parser')

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

app.get('/:word/echo', function(req, res) {
  const { word: echo } = req.params

  res.json({
    echo,
  })
})

app.get('/name', function(req, res) {
  const {first, last} = req.query
  res.json({
    name: `${first} ${last}`
  })
})

app.use(bodyParser.urlencoded({extended: false}))

app.post('/name', function(req, res) {
  const { first, last} = req.body
  res.json({
    name: `${first} ${last}`
  })
})

app.use(express.static(__dirname + '/public'))






























 module.exports = app;
