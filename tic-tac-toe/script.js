const game = {
    xTurn: true,
    boardState: Array(9).fill(null),
    winningCombinations: [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
    ]
}

const X_CLASS = "X"
const O_CLASS = "O"

const cells = document.querySelectorAll('.cell');
const cellArray = Array.from(cells);
const turnText = document.querySelector('h2')
const restartButton = document.querySelector('.restart')

cellArray.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
})

restartButton.addEventListener('click', resetGame)

console.log(cellArray)

function handleCellClick(e) {
    const currentCell = e.target;
    if(currentCell.getAttribute('disabled') === true) return;
    const classToAdd = game.xTurn ? X_CLASS : O_CLASS;
    currentCell.classList.add(classToAdd);
    currentCell.setAttribute('disabled', true)
    game.xTurn = !game.xTurn;
    turnText.innerText = `It is ${game.xTurn ? 'X' : 'O' }'s turn!`
    game.boardState[cellArray.indexOf(currentCell)] = classToAdd;
    checkForWinner();
}

function checkForWinner(){
    for(let i=0; i < game.winningCombinations.length; i++) {
        const [a,b,c] = game.winningCombinations[i];
        if(!game.boardState[a] || !game.boardState[b] || !game.boardState[c]) continue;
        if(game.boardState[a] === game.boardState[b] && game.boardState[b] === game.boardState[c]) {
            turnText.innerText = `${game.boardState[a]} Wins!`
            cellArray.forEach(cell => {
                cell.setAttribute('disabled', true)
            })
            restartButton.classList.remove('hidden');
        }

    }

}

function resetGame(){
    cellArray.forEach(cell => {
        cell.setAttribute('disabled', false)
        if(cell.classList.contains("X")) cell.classList.remove("X")
        if(cell.classList.contains("O")) cell.classList.remove("O")
    })
    game.boardState = Array(9).fill(null);
    game.xTurn = true;
    turnText.innerText = "It is X's turn";
}


