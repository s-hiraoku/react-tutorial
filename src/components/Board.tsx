import React from 'react';
import { Square } from './Square';
import '../styles/index.css';

type BoardProps = {
  propSquares: Array<string | null>;
  onClick: (i: number) => void;
};

export const Board: React.FC<BoardProps> = ({ propSquares, onClick }) => {
  const renderSquare = (i: number) => {
    return <Square value={propSquares[i]} onClick={() => onClick(i)} />;
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
