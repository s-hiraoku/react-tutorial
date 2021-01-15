import React from 'react';
import '../styles/index.css';

type SquareProps = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string | null;
};

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
