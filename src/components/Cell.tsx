import React from 'react';

interface CellProps {
  value: number | '';
  onChange: (value: number | '') => void;
  isConflicted: boolean;
}

const Cell: React.FC<CellProps> = ({ value, onChange, isConflicted }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 9) {
      onChange(newValue);
    } else if (e.target.value === '') {
      onChange('');
    }
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value === '' ? '' : value}
      onChange={handleInput}
      className={`cell ${isConflicted ? 'conflicted' : ''}`}
    />
  );
};

export default Cell;
