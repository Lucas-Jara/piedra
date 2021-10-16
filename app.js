const choices = document.querySelectorAll('#choices > div');
const winUser = document.getElementById('score-user');
const winComputer = document.getElementById('score-computer');
const round = document.getElementById('roundCount');
const gameUser = document.querySelector('.game-user');
const gameComputer = document.querySelector('.game-computer');

let scoreUser = 1;
let scoreComputer = 1;
let countRound = 1;


/* CHOICE COMPUTER */
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let cho = choice[Math.floor(Math.random() * choices.length)];
    animation('computer', cho);
    return cho;
}
/* END CHOICE COMPUTER */



/* CHOICE USER */

function getUserChoice() {
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', () => {
            switch (choices[i].id) {
                case 'rock':
                    animation('user', 'rock');
                    game('rock');
                    break;
                case 'paper':
                    animation('user', 'paper');
                    game('paper');
                    break;
                case 'scissors':
                    animation('user', 'scissors');
                    game('scissors');
                    break;

            }
        })
    }

}

getUserChoice()


/* END CHOICE USER */


function animation(person, img) {
    if (person === 'user') {
        gameUser.innerHTML = `<img src="img/none.png">`;
        gameUser.querySelector('img').style.animation = 'animate .6s linear';

        setTimeout(() => {
            gameUser.innerHTML = `<img src="img/${img}.png">`;
        }, 500);
    } else {
        gameComputer.innerHTML = `<img src="img/none.png">`;
        gameComputer.querySelector('img').style.animation = 'animate .6s linear';

        setTimeout(() => {
            gameComputer.innerHTML = `<img src="img/${img}.png">`;
        }, 500);
    }
}





function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            setTimeout(() => {
                winUser.textContent = scoreUser++;
                round.textContent = countRound++;
            }, 500);
            break;

        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            setTimeout(() => {
                winComputer.textContent = scoreComputer++;
                round.textContent = countRound++;
            }, 500);
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            setTimeout(() => {
                round.textContent = countRound++;
            }, 500);
            break;
    }
}
