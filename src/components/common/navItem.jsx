import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ current, label }) => {
  let navLinkClasses = "nav-link";

  current === label ? navLinkClasses += " selected" : navLinkClasses += "";

  return (
    <li className="list__item nav-list__item">
      <NavLink
        to={"/" + label}
        className={navLinkClasses}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;