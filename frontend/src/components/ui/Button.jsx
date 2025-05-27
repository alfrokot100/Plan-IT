import React from 'react';

export const Button = ({ children, variant, onClick, className }) => {
  const buttonClass = variant === "outline" ? "btn-outline" : "btn";

  return (
    <button onClick={onClick} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
};