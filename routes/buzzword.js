// jshint esversion: 6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var data = require('../data.js');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', (req, res) => {
  var body = req.body;
  if(req.body.hasOwnProperty('buzzWord') && req.body.hasOwnProperty('points')){
    var newWord = {};
    newWord.buzzWord = req.body.buzzWord;
    newWord.points = req.body.points;
    newWord.heard = false;
    data.buzzwordList.push(newWord);
    res.send({"success": true});
  } else {
    res.end("Word didn't have valid properties of buzzWord: 'string' & points: 'number'");
  }
});

router.put('/', (req, res) => {
  var calledWord = req.body;
  for(let i = 0; i < data.buzzwordList.length; i++){
    if(data.buzzwordList[i].buzzWord === calledWord.buzzWord){
      data.userScore += parseInt(scores.buzzwordList[i].points);
      data.buzzwordList[i].heard = true;
      res.send({"success": true, "new Score": data.userScore});
      return true;
    }
  }
  res.end("Word doesn't exist");
  return false;
});

router.delete('/', (req, res) => {
  var calledWord = req.body;
  for(let i = 0; i < data.buzzwordList.length; i++){
    if(data.buzzwordList[i].buzzWord === calledWord.buzzWord){
      data.buzzwordList.splice(i, 1);
      res.send({"success": true});
      return true;
    }
  }
  res.end("Word doesn't exist");
  return false;
});

module.exports = router;