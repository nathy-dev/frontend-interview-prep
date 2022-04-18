import { useState, useEffect } from "react";
import Board from "./Board";

const Game = () => {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ xTurn, setXTurn ] = useState(true);
    const [ displayText, setDisplayText ] = useState("X's Turn");
    const [ gameover, setGameOver ] = useState(false)

    useEffect(()=> {
        checkWinner()
    }, [squares] );

    useEffect(()=> {
        if(!gameover) return;
        const board = [...squares]
        for(let i = 0; i < board.length; i++) {
            if(board[i]) continue;
            board[i] = "disabled";
        }
        setSquares(board)
    }, [gameover])

    const checkWinner = () => {
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

        for(let combos of WINNING_COMBINATIONS) {
            const [a, b, c] = combos;
            if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                const winningMessge = `${squares[a].toUpperCase()} Wins!`
                setDisplayText(winningMessge);
                setGameOver(true)
            }
        }

    }

    function handleSquareClick(i) {
       const current = [...squares];
       if(current[i]) return;
       current[i] = xTurn ? 'x' : 'o';
       setSquares(current);
       setXTurn(!xTurn);
       setDisplayText(`${xTurn ? 'O' : 'X'}'s Turn`)

    }

    return (
        <div className="game">
             <h1>{displayText}</h1>
             <Board squares={squares} onClick={handleSquareClick} />
        </div>
    )
}

export default Game;