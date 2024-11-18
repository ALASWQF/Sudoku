// Defines a type for the Sudoku board, where each cell can either be a number or an empty string
export type SudokuBoard = (number | '')[][];

// Defines the difficulty levels for puzzle generation
export type Difficulty = 'easy' | 'medium' | 'hard';
