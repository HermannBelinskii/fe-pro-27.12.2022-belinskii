import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="btn btn-primary mb-3">
      {label}
    </button>
  );
};

export default Button;