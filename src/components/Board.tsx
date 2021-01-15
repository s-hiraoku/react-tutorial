import React, { useState } from 'react';
import { Square } from './Square';
import '../styles/index.css';

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = 'Winner: ' + winner;
  if (!winner) status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  const handleClick = (i: number) => {
    squares[i] = xIsNext ? 'X' : 'O';
    setSquares(Array.from(squares));
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

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
