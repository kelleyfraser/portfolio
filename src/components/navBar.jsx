import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './common/navItem';
import Button from './common/button';
import Burger from './common/burger';
import Resume from '../Resume.pdf';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  let navListClasses = "list nav-list";
  !isOpen ? navListClasses += " closed" : navListClasses += "";

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav onClick={toggleNavBar} className="navbar">
      <div className="nav-heading">
        <NavLink to="/"><img className="nav-brand" src="images/logo.png"></img></NavLink>
        <Burger toggleNavBar={toggleNavBar} />
      </div>
      <ul className={navListClasses}>
        <NavItem label='experience' />
        <NavItem label='projects' />
        <NavItem label='contact' />
        <li className="list__item nav-list__item"><a href={Resume} rel="noopener noreferrer" target="_blank"><Button name="resume"></Button></a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

