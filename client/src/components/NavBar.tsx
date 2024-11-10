import React from "react";
import "../components/NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <img
        src="../public/img/logo.png"
        className="logo"
        alt="une terre avec un pins rouge au couleur de notre charte"
      />
      <nav className="nav">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#apropos" className="nav-link">
          A propos
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}
export default NavBar;