import React from 'react';

const Button = ({ bgColor, color, size = 'base', text, borderRadius }) => {
  return (
    <button 
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`} // Default size = 'base'
    >
      {text}
    </button>
  );
};

export default Button;
