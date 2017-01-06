// jshint esversion: 6

var list = [];
var score = 0;

function reset(){
  list = [];
  score = 0;
}

module.exports = {
  buzzwordList: list,
  userScore: score,
  resetEverything: reset()
};