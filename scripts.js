function getComputerChoice(){

    let choice = Math.random();

    if(choice <= 0.33){
        return "rock"
    }
    else if (choice > 0.33 && choice <= 0.66){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){

    let humanChoice = prompt("What do you choose?").toLowerCase();
    while (true){

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
        return humanChoice;
    }
    else{
        humanChoice = prompt("invalid choice");
    }
}

}

let resultsBox = document.querySelector('.results');
let result;
let round = 1;
let computerScoreTracker = document.querySelector('.computerScore');
let humanScoreTracker = document.querySelector('.humanScore');
let winner = document.querySelector('.winner');

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "scissors" && computerChoice == "rock"){
            result = "You lose! Rock beats Scissors :/";
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            result = "You win! Scissors beats Paper :)";
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
            result = "It's a draw! You both chose Scissors :o";
        }
        else if(humanChoice == "rock" && computerChoice == "paper"){
            result = "You lose! Paper beats Rock :/";
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            result = "You win! Rock beats Scissors :)";
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "rock"){
            result = "It's a draw! You both chose Rock :o";
        }
        else if(humanChoice == "paper" && computerChoice == "scissors"){
            result = "You lose! Scissors beats Paper :/";
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            result = "You win! Paper beats Rock :)";
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            result = "It's a draw! You both chose Paper :o";
        }
        resultsBox.textContent = result;
        humanScoreTracker.textContent = humanScore;
        computerScoreTracker.textContent = computerScore;
        round++;

        if (round == 5){

            if(humanScore > computerScore){
                winner.textContent = "Congratulations, YOU WIN! :D";
            }
            else if(computerScore < humanScore){
                winner.textContent = "Oh no, YOU LOSE! :'("
            }
            else if (computerScore == humanScore){
                winner.textContent = "It's a draw, NICE TRY :)"
            }
            

        }

        
    }

    let options = document.querySelectorAll('.option');
    options.forEach(option => {

        option.addEventListener('click', () => {

            if (option.classList.contains('rock')){
                playRound('rock', getComputerChoice());
            }
            else if(option.classList.contains('paper')){
                playRound('paper', getComputerChoice())

            }
            else{
                playRound('scissors', getComputerChoice())
            }

        })

    })
    
    /*
    while(round <= 5){

    round++;
    }
    */

    /*
    
    */

}

let playBtn = document.querySelector('.play');
playBtn.addEventListener('click', playGame);
