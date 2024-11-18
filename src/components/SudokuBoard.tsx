import React, { useState } from 'react';
import Cell from './Cell';
import Controls from './Controls';
import OCRUploader from './ploader';
import  {isValidSudoku} from'../utils/validation' ;
import { generatePuzzle } from '../utils/sudokuGenerator';
import { solveSudoku } from '../utils/sudokuSolver';

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<(number | '')[][]>(Array(9).fill(Array(9).fill('')));


  const handleGenerate = (difficulty: 'easy' | 'medium' | 'hard') => {
    setBoard(generatePuzzle(difficulty));
  };

  const handleSolve = () => {
    setBoard(solveSudoku(board));
  };

  const handleReset = () => {
    setBoard(Array(9).fill(Array(9).fill('')));
  };

  const handleBoardExtracted = (extractedBoard: (number | '')[][]) => {
    setBoard(extractedBoard);
  };

  const updateCell = (row: number, col: number, value: number | '') => {
    const newBoard = board.map((r, i) => r.map((cell, j) => (i === row && j === col ? value : cell))
    );
    setBoard(newBoard);
  };

  return (
    <div>
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((value, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={value}
                onChange={(newValue) => updateCell(rowIndex, colIndex, newValue)}
                isConflicted={!isValidSudoku(board) && value !== ''} />
            ))}
          </div>
        ))}
      </div>
      <Controls onGenerate={handleGenerate} onSolve={handleSolve} onReset={handleReset} />
      <OCRUploader onBoardExtracted={handleBoardExtracted} />
    </div>
  );
}

export default SudokuBoard;
