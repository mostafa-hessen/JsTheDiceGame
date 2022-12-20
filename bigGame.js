"use strict";

let playersObj = [{
        current: 0,
        score: 0,
    },
    {
        current: 0,
        score: 0,
    },
];
const newGame = document.querySelector(".btn--new");
const players = Array.from(document.querySelectorAll(".players"));
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
let imgScr = document.querySelector(".dice");
let state = true
let playerNum;
let randomNum;


// const mq = window.matchMedia( "(max-width: 786px)" );

// if (screen.width <= 768 ) {
//    rollDice.textContent="🎲 Roll"
//   } else   {
//     // alert('More than 960');
//    rollDice.textContent="🎲 Roll Dice"

//   }
//   window.addEventListener("size", function() {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//     //   console.log("Screen width is at least 500px")
//    rollDice.textContent="🎲 Roll"

//     } else {
//     //   console.log("Screen less than 500px")
//    rollDice.textContent="🎲 Roll Dice"

//     }
//   })
function Random() {
    return (randomNum = Math.floor(Math.random() * 6));
}

function playerNumFunc() {
    for (var i = 0; i < players.length; i++) {
        players[i].classList.contains("player--active") ? (playerNum = i) : "";

    }

}

function scoreFunc() {
    document.querySelector(`#score--${playerNum}`).textContent =
        Number(document.querySelector(`#score--${playerNum}`).textContent) + playersObj[playerNum].current
    if (document.querySelector(`#score--${playerNum}`).textContent > 100) {
        players[playerNum].classList.add('player--winner')
        state = false
    }

}

function changeActive() {
    if (playerNum == 0) {
        players[playerNum].classList.remove("player--active");
        players[playerNum + 1].classList.add("player--active");
        document.querySelector(`#current--${playerNum}`).textContent = playersObj[
            playerNum
        ].current = 0;
    } else {
        players[playerNum - 1].classList.add("player--active");
        players[playerNum].classList.remove("player--active");
        document.querySelector(`#current--${playerNum}`).textContent = playersObj[
            playerNum
        ].current = 0
    }

}




function rollDiceFunc(state) {
    if (state) {
        playerNumFunc()
        Random();
        console.log("=>", randomNum);
        if (randomNum != 0) {
            document.querySelector(`#current--${playerNum}`).textContent = playersObj[
                playerNum
            ].current += randomNum;
        } else if (randomNum == 0) {
            changeActive()
        }
        imgScr.style.display = 'flex'
        console.log(imgScr.src = `./images/dice-${randomNum}.png`);
    }
}


function holdFunc(state) {

    if (state) {

        playerNumFunc()

        scoreFunc()
        changeActive()
    }


}

function newGameFunc() {
    imgScr.src = `./images/dice-${0}.png`
    for (let i = 0; i < playersObj.length; i++) {
        document.querySelector(`#current--${i}`).textContent = playersObj[
            i
        ].current = 0;

        document.querySelector(`#score--${i}`).textContent = playersObj[
            i
        ].score = 0;


        players[0].classList.add("player--active");
        players[1].classList.remove("player--active");
        document.querySelector(`#current--${playerNum}`).textContent = playersObj[
            playerNum
        ].current = 0;

        players[i].classList.remove('player--winner')

    }

    state = true




}





rollDice.addEventListener("click", () => rollDiceFunc(state));
hold.addEventListener('click', () => holdFunc(state))
newGame.addEventListener('click', newGameFunc)