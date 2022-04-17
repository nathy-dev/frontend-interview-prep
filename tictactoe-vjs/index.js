const cells = Array.from(document.querySelectorAll(".cell"));
const turnMessage = document.querySelector('[turn-message]');

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
let xTurn = false;

cells.forEach(cell => {
    cell.addEventListener('click', handleTurn)
})

function handleTurn(e){
    const cell = e.target;
   if(!cell.getAttribute('disabled')) {
        cell.textContent = xTurn ? 'X' : '0';
        xTurn = !xTurn;
        turnMessage.textContent = `It is ${xTurn ? 'X' : 'O'}'s turn`
        cell.setAttribute('disabled', true);
        cell.classList.add('disabled')
   }
}

function checkWinner(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        })
    })
}




