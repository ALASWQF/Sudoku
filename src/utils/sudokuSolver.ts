export const solveSudoku = (board: (number | '')[][]): (number | '')[][] => {
    const solvedBoard = JSON.parse(JSON.stringify(board)); // Clone board
  
    const solve = (row: number, col: number): boolean => {
      if (col === 9) {
        col = 0;
        row++;
        if (row === 9) return true;
      }
  
      if (solvedBoard[row][col] !== '') return solve(row, col + 1);
  
      for (let num = 1; num <= 9; num++) {
        if (isSafe(solvedBoard, row, col, num)) {
          solvedBoard[row][col] = num;
          if (solve(row, col + 1)) return true;
          solvedBoard[row][col] = '';
        }
      }
  
      return false;
    };
    // Function to check if it's safe to place a number in a given cell
     const isSafe = (
    board: (number | '')[][], 
    row: number, 
    col: number, 
    num: number
  ): boolean => {
    // Check the row for the same number
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
  
    // Check the column for the same number
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
  
    // Check the 3x3 grid for the same number
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
  
    return true; // Safe to place the number
  };
  
  
    solve(0, 0);
    return solvedBoard;
  };
  