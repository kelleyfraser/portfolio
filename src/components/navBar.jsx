import React, { forwardRef, useState } from 'react';
import NavItem from './navItem';
import Button from './common/button';
import Burger from './common/burger';

const NavBar = (props, ref) => {

  const [isOpen, setIsOpen] = useState(false);

  let navListClasses = "list nav-list";
  !isOpen ? navListClasses += " closed" : navListClasses += "";

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={ref} className="navbar">
      <div className="nav-heading">
        <a href="#home"><img className="nav-brand" src="images/logo.png"></img></a>
        <Burger isOpen={isOpen} toggleNavBar={toggleNavBar}/>
      </div>
      <ul className={navListClasses}>
        <NavItem current={props.currentLink} label='about' toggleNavBar={toggleNavBar} />
        <NavItem current={props.currentLink} label='experience' toggleNavBar={toggleNavBar} />
        <NavItem current={props.currentLink} label='skills' toggleNavBar={toggleNavBar} />
        <NavItem current={props.currentLink} label='projects' toggleNavBar={toggleNavBar} />
        <NavItem current={props.currentLink} label='contact' toggleNavBar={toggleNavBar} />
        <li className="nav-list__item"><Button name="resume"></Button></li>
      </ul>
    </nav>
  );
}

export default forwardRef(NavBar);

