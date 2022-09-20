import React from 'react';

const NavItem = ({ current, label, toggleNavBar }) => {
  let navLinkClasses = "nav-link";

  current === label ? navLinkClasses += " selected" : navLinkClasses += "";

  return (
    <li className="nav-list__item">
      <a
        href={"#" + label}
        className={navLinkClasses}
        onClick={toggleNavBar}
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;