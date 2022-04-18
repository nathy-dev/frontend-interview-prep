const gameState = {
    xTurn: true,
    board: Array(9).fill(null),
    winner: null
}

const squares = Array.from(document.querySelectorAll('.game-square'));
const heading = document.getElementById('game-heading');
const restartButton = document.getElementById('restart-button')

squares.forEach(square => {
    square.addEventListener('click', onSquareClick)
})

restartButton.addEventListener('click', onRestart)

function onSquareClick(e) {
    const button = e.target
    const toFill = gameState.xTurn ? 'X' : 'O';
    gameState.board[squares.indexOf(button)] = toFill;
    button.textContent = toFill;
    button.disabled = true;
    checkWinner();
    gameState.xTurn = !gameState.xTurn;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let combo of winningCombinations) {
        const [a, b, c] = combo;
        const board = gameState.board;
        if(board[a] && board[a] === board[b] && board[b] === board[c]) {
            gameState.winner = gameState.xTurn ? 'Player 1' : 'Player 2'
            heading.innerText = `${gameState.winner} Won!` 
            squares.forEach(square => square.disabled = true);
            restartButton.style.display = 'block'
        } else if (squares.filter(square => !square.innerText).length === 0){
            heading.innerText = 'Tie Game!';
            restartButton.style.display = 'block'
        } else if(gameState.winner === null){
            heading.innerText = gameState.xTurn ? "Player 2's Turn" : "Player 1's Turn"
        }
    }
}

function onRestart(){
    gameState.xTurn = true;
    gameState.board = Array(9).fill(null);
    gameState.winner = null;
    squares.forEach(square => {
        square.disabled = false;
        square.innerText = '';
    })
    heading.innerText = "Player 1's Turn"
    restartButton.style.display = 'none'
}