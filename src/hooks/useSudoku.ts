import { useState, useCallback } from 'react';
import { isValidSudoku } from '../utils/validation';  // Assuming you have validation logic in 'validation.ts'
import { solveSudoku } from '../utils/sudokuSolver';  // Assuming you have solver logic in 'solveSudoku.ts'

export const useSudoku = () => {
  // Initialize the Sudoku board as an array of 9x9 cells
  const [board, setBoard] = useState<(number | '')[][]>([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ]);

  // Function to update the value of a specific cell
  const updateCell = useCallback(
    (row: number, col: number, value: number | '') => {
      const newBoard = [...board];
      newBoard[row][col] = value;
      setBoard(newBoard);
    },
    [board]
  );

  // Function to check if the current Sudoku board is valid
  const checkValidity = useCallback(() => {
    return isValidSudoku(board);
  }, [board]);

  // Function to solve the Sudoku board
  const solve = useCallback(() => {
    const solvedBoard = solveSudoku(board);
    setBoard(solvedBoard);
  }, [board]);

  // Function to reset the board to empty state
  const resetBoard = useCallback(() => {
    setBoard([
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
    ]);
  }, []);

  return {
    board,
    updateCell,
    checkValidity,
    solve,
    resetBoard,
  };
};
