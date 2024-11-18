import React from 'react';

interface ControlsProps {
  onGenerate: (difficulty: 'easy' | 'medium' | 'hard') => void;
  onSolve: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onGenerate, onSolve, onReset }) => {
  return (
    <div className="ocr-uploader">
      <button onClick={() => onGenerate('easy')}>Generate Easy</button>
      <button onClick={() => onGenerate('medium')}>Generate Medium</button>
      <button onClick={() => onGenerate('hard')}>Generate Hard</button>
      <button onClick={onSolve}>Solve</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
