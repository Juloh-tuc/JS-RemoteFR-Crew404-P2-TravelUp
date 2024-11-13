import { useState } from "react";
import "../components/NavBar.css";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <img
        className="logo"
        src="/img/logo.png"
        alt="une terre avec un pins rouge au couleur de notre charte"
      />

      <nav
        className={`navbar ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ul className="navbar-links">
          <li>
            <a href="#about">
              <img src="/img/about.png" alt="About" />
            </a>
          </li>
          <li>
            <a href="#home">
              <img src="/img/home.png" alt="Home" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src="/img/contact.png" alt="Contact" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
