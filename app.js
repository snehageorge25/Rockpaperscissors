let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choice=['r', 'p', 's'];
  const randomNumber=Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function toWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  return "Scissors";
}
// console.log(getComputerChoice());

function win(userCh, compCh){
  userScore++;
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userCh);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${toWord(userCh)}${userSmall} beats ${toWord(compCh)}${compSmall}. You win!🎇`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){ userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userCh, compCh){
  computerScore++;
  const userChoice_div = document.getElementById(userCh);
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${toWord(userCh)}${userSmall} loses to ${toWord(compCh)}${compSmall}. You lost...😢`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userCh, compCh){
  const userChoice_div = document.getElementById(userCh);
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  result_p.innerHTML = `${toWord(userCh)}${userSmall} equals ${toWord(compCh)}${compSmall}. Its a draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 300);
}


function game(userChoice){
  const computerChoice= getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
// game("c");

main();
function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}
