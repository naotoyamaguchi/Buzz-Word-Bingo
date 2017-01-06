// jshint esversion: 6

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var scores = require('../scores.js');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/', (req, res) => {
  var newWord = {};
  newWord.buzzWord = req.body.buzzWord;
  newWord.points = req.body.points;
  newWord.heard = false;
  scores.buzzwordList.push(newWord);
  res.send({"success": true});
  res.end();
});

router.put('/', (req, res) => {
  var calledWord = req.body;
  for(let i = 0; i < scores.buzzwordList.length; i++){
    if(scores.buzzwordList[i].buzzWord === calledWord.buzzWord){
      scores.userScore += parseInt(scores.buzzwordList[i].points);
      scores.buzzwordList[i].heard = true;
      res.send({"success": true, "new Score": scores.userScore});
      return true;
    }
  }
  res.end("Word doesn't exist");
  return false;
});

router.delete('/', (req, res) => {
  var calledWord = req.body;
  for(let i = 0; i < scores.buzzwordList.length; i++){
    if(scores.buzzwordList[i].buzzWord === calledWord.buzzWord){
      scores.buzzwordList.splice(i, 1);
      res.send({"success": true});
      return true;
    }
  }
  res.end("Word doesn't exist");
  return false;
});

module.exports = router;