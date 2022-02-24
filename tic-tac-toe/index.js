const arena = document.getElementById('arena');
const squares = document.querySelectorAll('.square');
const overlay = document.querySelector('.overlay');
const modalWindowWrapper = document.querySelector('.modal-window-wrapper');
const modalWindowContent = document.querySelector('.modal-window-content');
const elementWinner = document.querySelector('.winner');
const elementSteps = document.querySelector('.step-count');
const elementGameCount = document.querySelector('.game-count');
const elementWinX = document.querySelector('.win-x');
const elementWinO = document.querySelector('.win-o');
const elementDraw = document.querySelector('.draw');
const btnNextGame = document.querySelector('.btn-next-game');
const btnRestart = document.querySelector('.btn-restart');
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];
const crossAudio = new Audio('assets/audio/cross.mp3');
const zeroAudio = new Audio('assets/audio/zero.mp3');
const winAudio = new Audio('assets/audio/win.mp3');
const drawAudio = new Audio('assets/audio/draw.mp3');
crossAudio.playbackRate = 2.0;
zeroAudio.playbackRate = 2.0;
let stepCount = 0;
let winner = '';
let winX = 0;
let winO = 0;
let draw = 0;

const gameCount = (winX, winO, draw) => {
    return winX + winO + draw;
}


arena.addEventListener('click', event => {
    if(event.target.className = 'square') {
        if(stepCount % 2 === 0 && event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
            event.target.innerHTML = 'X';
            crossAudio.play();
            stepCount++;
        } else if (stepCount % 2 !== 0 && event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
            event.target.innerHTML = 'O';
            zeroAudio.play();
            stepCount++;
        }
        checkWinner();
    }
});

const checkWinner = () => {
    for(let i = 0; i < winComb.length; i++) {
        if(squares[winComb[i][0]].innerHTML === 'X' && squares[winComb[i][1]].innerHTML === 'X' && squares[winComb[i][2]].innerHTML === 'X') {
            winAudio.play();
            winner = 'Crosses win!';
            winX++;
            showModal(winner);
        } else if (squares[winComb[i][0]].innerHTML === 'O' && squares[winComb[i][1]].innerHTML === 'O' && squares[winComb[i][2]].innerHTML === 'O') {
            winAudio.play();
            winner ='Zeros won!'
            winO++;
            showModal(winner);
        }  
    }

    if(stepCount === 9 && winner !== 'Crosses win!' && winner !== 'Zeros won!') {
        drawAudio.play();
        winner = 'Draw!';
        draw++;
        showModal(winner);
    }
};

const showModal = () => {
    modalWindowWrapper.classList.add('active');
    elementWinner.innerHTML = winner;
    elementSteps.innerHTML = `Steps: ${stepCount}`;
    elementGameCount.innerHTML = `All games: ${gameCount(winX, winO, draw)}`;
    elementWinX.innerHTML = `Crosses: ${winX}`;
    elementWinO.innerHTML = `Zeros: ${winO}`;
    elementDraw.innerHTML = `Draw: ${draw}`;
};

const closeModal = () => {
    modalWindowWrapper.classList.remove('active');
    location.reload();
};

btnNextGame.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

btnRestart.addEventListener('click', () => {
    winX = 0;
    winO = 0;
    draw = 0;
    location.reload();
});

const setLocalStorage = () => {
    if(gameCount(winX, winO, draw) >= 10) {
        winX = 0;
        winO = 0;
        draw = 0;
    }
    localStorage.setItem('winX', winX);
    localStorage.setItem('winO', winO);
    localStorage.setItem('draw', draw);
};

window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
    winX = Number(localStorage.getItem('winX'));
    winO = Number(localStorage.getItem('winO'));
    draw = Number(localStorage.getItem('draw'));
};

window.addEventListener('load', getLocalStorage);