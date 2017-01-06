// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
var buzzword = require('./routes/buzzword');
var scores = require('./scores.js');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/buzzwords', (req, res) => {
  res.send(scores.buzzwordList);
});

app.use('/buzzword', buzzword);

app.post('/reset', (req, res) => {
  console.log(buzzWordList);
});

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is working and listening...");
  console.log(scores.buzzwordList);
  console.log(scores.userScore);
});