function startGame() {
    let answer = prompt('Would you like to play a game?');
    if (answer === 'yes') {
        let userName = prompt('Enter your name!');
        startCombat(userName);
    }else if (answer === 'no') {
        console.log('Thanks for stopping by!');
        }
}

function getDamage() {
    return Math.floor((Math.random() * 5) + 1)
}

function startCombat(userName) {
    let opponent = 'Grant the almighty chicken';
    let userHealth = 40;
    let opponentHealth = 10;
    let Wins = 0;
    while (userHealth > 0 && Wins < 3) {
            opponentHealth -= getDamage();
            userHealth -= getDamage();
            console.log(`${opponent} has ${opponentHealth} health left`);
            console.log(`${userName} has ${userHealth} health left`);
            let userMove = prompt('Would you like to attack or quit?');
            if (userMove === 'attack') {
                if (opponentHealth <= 0) {
                opponentHealth = 10;
                console.log(++Wins);
                }
            if (Wins === 3){
                console.log(`${userName} won the game`);
            }
            if (userHealth <= 0){
                console.log(`${opponent} won the game`);
            }
        }else if (userMove === 'quit') {
                console.log('Come back again!');
                break; 
            }
        }
    }
startGame();
