const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const random = options[Math.floor(Math.random() * options.length)];
    console.log(random);
    return random;
}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Win"
    }else{
        return "Lose"
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        return "Aww one more time!"
    }else if(result == "Win"){
        return `Yaay! Win! ${playerSelection} beats ${computerSelection}`
    }else{
        return `Aww better luck next time... ${computerSelection} beats ${playerSelection} `
    }
  }
   
  const playerSelection = getComputerChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));