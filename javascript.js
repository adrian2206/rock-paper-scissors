let computerSelection = "";
let humanSelection = ""
let humanScore = 0;
let computerScore = 0;
const rockPaperScissor = document.querySelector("#rock-paper-scissor");
        
    function getComputerChoice() {
        let randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1/3) {
            return "rock";
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            return "paper";
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
            return "scissor";
        };
      }

    function playRound (humanSelection, computerSelection) {
        if (humanSelection === "rock" && computerSelection === "scissor" ||
            humanSelection === "paper" && computerSelection === "rock" ||
            humanSelection === "scissor" && computerSelection === "paper"
        ) return humanScore += 1;
        else if (humanSelection === "rock" && computerSelection === "paper" ||
            humanSelection === "paper" && computerSelection === "scissor" ||
            humanSelection === "scissor" && computerSelection === "rock"
        ) return computerScore += 1;
        else return humanScore += 0;
    }

rockPaperScissor.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
        
            case 'rock':
                humanSelection = 'rock';
                computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                break;
                
            case 'paper':
                humanSelection = 'paper';
                computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                break;
            
            case 'scissor':
                humanSelection = 'scissor';
                computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                break;
        }
        let results = document.querySelector('#results');
        results.textContent = `Results: Human - ${humanScore} Computer - ${computerScore}`;
});

           
      
            //  function playGame () {
        //     for (let i = 0; i <= 3; i++) {
        //     let humanSelection = getHumanChoice();
        //     let computerSelection = getComputerChoice();
        //         playRound(humanSelection, computerSelection);
        //     };
        //     return `${humanScore} ${computerScore}`;
        //  };


        //  console.log(playGame());


    //   function getHumanChoice() {
    //     let choice = prompt("Make your choice: rock, paper or scissor.");
    //     return choice.toLowerCase();
    //   };





