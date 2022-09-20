import React from 'react';

const Burger = ({isOpen, toggleNavBar}) => {

  const isExpanded = isOpen ? true : false;
  let classes = "burger-container";
  isExpanded ? classes += " expanded" : classes += "";

  return (
    <button onClick={toggleNavBar} className={classes}>
      <span className="burger-span top-line" />
      <span className="burger-span middle-line" />
      <span className="burger-span bottom-line" />
    </button>
  )
}

export default Burger;