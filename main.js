
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function convert(letter){
    if(letter === 'r') return "Rock";
    if(letter === 's') return "Scissors";
    return "Paper";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win! ${convert(userChoice)} beats ${convert(computerChoice)}`
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose! ${convert(computerChoice)} beats ${convert(userChoice)}`
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "It's a draw!"
}



function game (userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
 
}

function main(){
    rock_div.addEventListener("click", () => {
        game("r");
    })

    paper_div.addEventListener("click", () => {
        game("p");
    })

    scissors_div.addEventListener("click", () => {
        game("s");
    })
}


main();