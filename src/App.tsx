import React from 'react';
import SudokuBoard from './components/SudokuBoard';
import Header from './components/Header';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SudokuBoard />
    </div>
  );
};

export default App;

