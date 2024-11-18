import {isValidSudoku} from './validation';
const shuffle = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isSafe = (
  board: (number | '')[][],
  row: number,
  col: number,
  num: number
): boolean => {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(x / 3);
    const boxCol = 3 * Math.floor(col / 3) + (x % 3);
    if (board[boxRow][boxCol] === num) return false;
  }
  return true;
};

const solveBoard = (board: (number | '')[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '') {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveBoard(board)) return true;
            board[row][col] = '';
          }
        }
        return false;
      }
    }
  }
  return true;
};

export const generatePuzzle = (difficulty: 'easy' | 'medium' | 'hard'): (number | '')[][] => {
  const board: (number | '')[][] = Array.from({ length: 9 }, () => Array(9).fill(''));
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Fill diagonal boxes
  for (let i = 0; i < 9; i += 3) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board[i + row][i + col] = numbers.pop()!;
      }
    }
  }

  solveBoard(board);

  // Remove cells based on difficulty
  const removeCells = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 40 : 50;
  for (let i = 0; i < removeCells; i++) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    board[row][col] = '';
  }

  return board;
};
