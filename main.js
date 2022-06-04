const computerPlay = () => {
    const moves = ["Rock", "Paper", "Scissors"];
    const randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove];
}

const playRound = (playerSelection, computerSelection) => {
    // Input validation
    if(playerSelection == null || computerSelection == null){
        return "Invalid input";
    }
    if(playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper"){
        return "Invalid input";
    }
    
    // Paper beats rock
    // Rock beats scissors
    // Scissors beats paper
    console.log(`You played ${playerSelection}`)
    console.log(`computer has played ${computerSelection}`)
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Draw! go again";
    }
    if(playerSelection.toLowerCase() === "paper" ){
        if(computerSelection.toLowerCase() === "rock"){
            return "You Win! Paper beats Rock";
        }
        else{
            return "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "paper"){
            return "You Win! Scissors beats paper";
        }
        else{
            return "You Lose! Rock beats Scissors";
        }
    }
}

const game = () => {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++){
        const playerMove = prompt("Rock, Paper, Scissors: ");
        const computerMove = computerPlay();

        const winner = playRound(playerMove, computerMove);
        console.log(winner);
        if(winner.includes("Win")){
            playerWins += 1;
        }
        else if(winner.includes("Lose")){
            computerWins += 1;
        }else if(winner.includes("Draw")){
            draws += 1;
        }
    }
    console.log(`You won: ${playerWins} Computer Won: ${computerWins} You Drew: ${draws}`);
}
game();
