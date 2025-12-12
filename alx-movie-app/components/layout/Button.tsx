import React from 'react';

interface LayoutButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default LayoutButton;
