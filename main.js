const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const random = options[Math.floor(Math.random() * options.length)];
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

function getPlayerChoice(){
    let validChoice = false;
    while(validChoice == false){
        const random = prompt("Rock Paper Scissors");
        if(random == null){
            continue;
        }
        const choiceInLower = random.toLowerCase();
        if(options.includes(choiceInLower)){
            validChoice = true;
            return choiceInLower;
        }   
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("HHi!")
    for(let i=0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(checkWinner(playerSelection,computerSelection) == "Win"){
            playerScore++
        
        }else if(checkWinner(playerSelection,computerSelection) == "Lose"){
            computerScore++
            
        }   
    }
    console.log("Game Over!");
    if(playerScore > computerScore){
        console.log("Player won game!");
    }else if(computerScore > playerScore){
        console.log("Computer won game!");
    }else{
        console.log("Tie! Play on!");
    }
}

  game();
   
