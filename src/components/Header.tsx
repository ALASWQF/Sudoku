import React from 'react';
import '../styles/Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Sudoku Solver</h1>
      <p>Solve, generate, or upload a Sudoku puzzle. Enjoy the challenge!</p>
    </header>
  );
};

export default Header;
