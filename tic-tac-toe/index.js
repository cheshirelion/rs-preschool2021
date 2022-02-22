const arena = document.getElementById('arena');
const squares = document.querySelectorAll('.square');
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

// let player = 'X';
let stepCount = 0;
let winner = '';
let winX = 0;
let winO = 0;
let draw = 0;
let gameCount = winX + winO + draw;


arena.addEventListener('click', event => {
    if(event.target.className = 'square') {
        stepCount % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        stepCount++;
        checkWinner();
    }
});

const checkWinner = () => {
    for(let i = 0; i < winComb.length; i++) {
        if(squares[winComb[i][0]].innerHTML === 'X' && squares[winComb[i][1]].innerHTML === 'X' && squares[winComb[i][2]].innerHTML === 'X') {
            winner = 'крестики';
            console.log(winner);
            winX++;
        } else if (squares[winComb[i][0]].innerHTML === 'O' && squares[winComb[i][1]].innerHTML === 'O' && squares[winComb[i][2]].innerHTML === 'O') {
            winner ='нолики'
            console.log(winner);
            winO++;
        }
        //  else if (squares[winComb[i][0]].innerHTML !== ('X' || 'O') && squares[winComb[i][1]].innerHTML !== ('X' || 'O') && squares[winComb[i][2]].innerHTML !== ('X' || 'O')) {
        //     winner = 'ничья';
        //     console.log(winner);
        //     draw++;
        // }
    }
};