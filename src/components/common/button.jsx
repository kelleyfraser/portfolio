import React from 'react';

const Button = ({ type, name }) => {
  return (
    <button type={type} className="btn btn--outline">{name}</button>
  );
}

export default Button;