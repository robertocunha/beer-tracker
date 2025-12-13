import React from 'react';

const ProgressBar = ({ percentage, isOverLimit }) => (
  <div className="mb-4">
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className={`h-4 transition-all duration-500 ${
          isOverLimit ? 'bg-red-500' : 'bg-amber-500'
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
    <p className="text-xs text-gray-600 mt-1 text-right">
      {percentage.toFixed(1)}% do limite
    </p>
  </div>
);

export default ProgressBar;
