import React, { useState } from 'react';
import { Board } from './Board';
import '../styles/index.css';
import { History } from 'models';

const WINNER_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Game: React.FC = () => {
  const [stateHistory, setStateHistory] = useState<History<string | null>>({
    history: [{ squares: Array(9).fill(null) }],
  });
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const calculateWinner = (squares: Array<string | null>) => {
    let result = null;
    return WINNER_LINES.some((pattern) => {
      const [a, b, c] = pattern;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        result = squares[a];
        return true;
      }
      return false;
    })
      ? result
      : null;
  };

  const handleClick = (i: number) => {
    const current = stateHistory.history[stateHistory.history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setStateHistory({
      history: stateHistory.history.concat([
        {
          squares: squares,
        },
      ]),
    });
  };

  const current = stateHistory.history[stateHistory.history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board propSquares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
