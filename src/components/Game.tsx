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
  const [stateHistory, setStateHistory] = useState<History<string | null>>([
    { squares: Array(9).fill(null) },
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);

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
    const history = stateHistory.slice(0, stepNumber + 1);
    const current = stateHistory[stateHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setStateHistory(
      stateHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(history.length);
  };
  const current = stateHistory[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const moves = stateHistory.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board propSquares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
