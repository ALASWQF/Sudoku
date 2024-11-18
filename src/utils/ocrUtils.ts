import Tesseract from 'tesseract.js';

export const extractSudokuFromImage = async (image: File): Promise<(number | '')[][]> => {
  const result = await Tesseract.recognize(image, 'eng', {
    logger: (m) => console.log(m), // Optional, logs progress
  });

  const text = result.data.text.replace(/\s/g, ''); // Remove whitespace
  const board: (number | '')[][] = Array.from({ length: 9 }, () => Array(9).fill(''));

  let index = 0;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const char = text[index++];
      board[row][col] = char >= '1' && char <= '9' ? parseInt(char, 10) : '';
    }
  }

  return board;
};
