var chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;
var welcomeUser=chalk.blue;
var correctAnswer=chalk.green;
var incorrectAnswer=chalk.red;
var scoreCard={
  noAnswer:chalk.red,
  oneAnswer:chalk.yellow,
  twoAnswers:chalk.blue,
  threeAnswers:chalk.cyan,
  fourAnswers:chalk.magenta,
  allAnswers:chalk.green
}
var questions = [
  {
    question: "What's Naruto's mother's name? ",
    options: ["Chiyo", "Kushina", "Tsunade"],
    answer:"Kushina"
  },
  {
    question: "Which word means female ninja? ",
    options: ["Kunoichi ", "Shinobi", "Ninjutsu"],
    answer:"Kunoichi "
  },
  {
    question: "Who's the only female ninja in Akatsuki? ",
    options: ["Tenari", "Sakura", "Konan"],
    answer:"Konan"
  },
  {
    question: "Who did Naruto fight against in the Preliminary Chunin Exam Rounds? ",
    options: ["Kiba", "Neji", "Shikamaru"],
    answer:"Kiba"
  },
  {
    question: "Naruto first shows his nine-tail chakra when he fights? ",
    options: ["Gaara", "Haku", "Sasuke"],
    answer:"Haku"
  },
]
var torchbearers=[{
  name:"Rajashree",
  score:"5"
},
{
  name:"Agni",
  score:"5"
},
{
  name:"Arka",
  score:"4"
}]

function answerCheck(question, answer, options) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (options[userAnswer].toUpperCase() === answer.toUpperCase()) {
    console.log(correctAnswer("Hurray"));
    score++;
  }
  else {
    console.log(incorrectAnswer("Nah"));
  }
}

function Quiz() {
  var userName = readlineSync.question("What's your name? ");
  console.log(welcomeUser(`Welcome ${userName}, the ultimate Naruto quiz?`));
  for (let i = 0; i < questions.length; i++) {
    answerCheck(questions[i].question, questions[i].answer, questions[i].options);
  }
}

function finalScore(){
  switch(score){
    case 0:
      console.log(scoreCard.noAnswer(`Damnn! Start watching Naruto ASAP! You score ${score} out of 5`));
      break; 
    case 1:
      console.log(scoreCard.oneAnswer(`You need to rewatch! You score ${score} out of 5`));
      break; 
    case 2:
      console.log(scoreCard.twoAnswers(`You are not a die hard fan! You score ${score} out of 5`));
      break; 
    case 3:
      console.log(scoreCard.threeAnswers(`Ahh! More efforts needed! You score ${score} out of 5`));
      break; 
    case 4:
      console.log(scoreCard.fourAnswers(`You almost got there! You score ${score} out of 5`));
      break; 
    case 5:
      console.log(scoreCard.allAnswers(`Wowzaaaa! True Naruto fan! You score ${score} out of 5`));
      break;    
  }

  console.log("Feel free to send me your score so that I'd update my WhoKnowsNarutoWell leaderboard ;)!")

  torchbearers.map(score => console.log(score.name, ":", score.score));
  
}

Quiz();
finalScore();