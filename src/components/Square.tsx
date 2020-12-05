import React, { useState } from 'react';
import './styles/index.css';

type SquareProps = { value: number };

export const Square: React.FC<SquareProps> = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <button
      className="square"
      onClick={() => {
        setValue('X');
      }}
    >
      {value}
    </button>
  );
};
