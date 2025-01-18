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

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors :/");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper :)");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
            console.log("It's a draw! You both chose Scissors :o");
        }
        else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock :/");
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors :)");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "rock"){
            console.log("It's a draw! You both chose Rock :o");
        }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper :/");
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock :)");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            console.log("It's a draw! You both chose Paper :o");
        }



    }
    let round = 1;

    while(round <= 5){
    playRound(getHumanChoice(), getComputerChoice());
    round++;
    }

    if(humanScore > computerScore){
        console.log("Congratulations, YOU WIN! :D");
    }
    else if(computerScore < humanScore){
        console.log("Oh no, YOU LOSE! :'(")
    }
    else{
        console.log("It's a draw, NICE TRY :)")
    }

}