import React from 'react';
import { Square } from './Square';
import '../styles/index.css';

const renderSquare = () => {
  return <Square />;
};

export const Board: React.FC = () => {
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};
