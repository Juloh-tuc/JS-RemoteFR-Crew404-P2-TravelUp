import React, { useState } from 'react';
import "../components/NavBar.css";

function NavBar() {
	 const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav
      className={`navbar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="navbar-logo">
        <img
          src="../public/img/logo.png"
          className="logo"
          alt="une terre avec un pins rouge au couleur de notre charte"
        />
      </div>
      <ul className="navbar-links">
        <a href="#about">
          About
        </a>
        <a href="#home">
          Home
        </a>
        <a href="#contact">
          Contact
        </a>
      </ul>
    </nav>
  );
	
}
export default NavBar;