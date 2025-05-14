
"hello new changes here";















console.log('LETS PLAY SOME ROCK PAPER SCISSORS!!!')
let array = ["rock", "paper", "scissors"];

let prompt = require('prompt');
function rockpaper() {
    prompt.get(['userChoice'], function (err, result) {

    
        let botChoiceIndex = Math.floor(Math.random() * array.length);
        let botChoice = array[botChoiceIndex];
        if (botChoice == result.userChoice) {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, Tie`);
        }
    
        else if (botChoice == 'rock' && result.userChoice == 'paper') {
        console.log(`bot picked ${botChoice}, user picked ${result.userChoice} user wins`);
        }
        else if (botChoice == 'rock' && result.userChoice == 'scissors') {
        console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, bot wins`);
        }
    
        else if (botChoice == 'paper' && result.userChoice == 'scissors') {
           console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, user wins`);
        }  
        else if (botChoice == 'paper' && result.userChoice == 'rock') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice} bot wins`);
        }
    
        else if (botChoice == 'scissors' && result.userChoice == 'rock') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, user wins`);
        }
        else if (botChoice == 'scissors' && result.userChoice == 'paper') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, bot wins`);
        }
    
    
        else if (result.userChoice == 'rock' && botChoice == 'paper') {
          console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, bot wins`);
        }
        else if (result.userChoice == 'rock' && botChoice == 'scissors') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, user wins`);
        }
    
        else if (result.userChoice == 'paper' && botChoice == 'scissors') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, bot wins`);
        }
        else if (result.userChoice == 'paper' && botChoice == 'rock') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, user wins`);
        }
    
        else if (result.userChoice == 'scissors' && botChoice == 'rock') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, bot wins`);
        }
        else if (result.userChoice == 'scissors' && botChoice == 'paper') {
            console.log(`bot picked ${botChoice}, user picked ${result.userChoice}, user wins`);
        }
    
        else if (result.userChoice == 'gun') {
            console.log('headshot, user wins')
        }
        
        else if (result.userChoice == 'bomb') {
            console.log('kaboom, user wins')
        }
        else {
            console.log("invalid input");
        }
    
    });

}

rockpaper();
    

"last change. ";