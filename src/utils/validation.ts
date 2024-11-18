// src/utils/validation.ts
export const isValidSudoku = (board: (number | '')[][]): boolean => {
    const isValidRow = (row: number) => {
      const seen = new Set<number | ''>();
      for (let i = 0; i < 9; i++) {
        const value = board[row][i];
        if (value !== '' && seen.has(value)) return false;
        seen.add(value);
      }
      return true;
    };
  
    const isValidCol = (col: number) => {
      const seen = new Set<number | ''>();
      for (let i = 0; i < 9; i++) {
        const value = board[i][col];
        if (value !== '' && seen.has(value)) return false;
        seen.add(value);
      }
      return true;
    };
  
    const isValidBox = (boxStartRow: number, boxStartCol: number) => {
      const seen = new Set<number | ''>();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const value = board[boxStartRow + row][boxStartCol + col];
          if (value !== '' && seen.has(value)) return false;
          seen.add(value);
        }
      }
      return true;
    };
  
    for (let i = 0; i < 9; i++) {
      if (!isValidRow(i) || !isValidCol(i)) return false;
      const boxRow = 3 * Math.floor(i / 3);
      const boxCol = 3 * (i % 3);
      if (!isValidBox(boxRow, boxCol)) return false;
    }
  
    return true;
  };
  
  