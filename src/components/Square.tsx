import React, { useState } from 'react';
import '../styles/index.css';

// type SquareProps = {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   value: number;
// };

export const Square: React.FC = () => {
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
