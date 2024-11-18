import React, { useState } from 'react';
import { extractSudokuFromImage } from '../utils/ocrUtils';

interface OCRUploaderProps {
  onBoardExtracted: (board: (number | '')[][]) => void;
}

const OCRUploader: React.FC<OCRUploaderProps> = ({ onBoardExtracted }) => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleOCR = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const board = await extractSudokuFromImage(image);
      onBoardExtracted(board);
    } catch (err) {
      setError('Failed to extract Sudoku from the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ocr-uploader" >
      <input type="file" accept="image/*" onChange={handleFileChange}/>
      <button onClick={handleOCR} disabled={loading}>
        {loading ? 'Processing...' : 'Upload & Solve'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default OCRUploader;
