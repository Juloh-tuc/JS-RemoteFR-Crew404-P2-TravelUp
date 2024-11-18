import { useState } from "react";
import "../components/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <img
        className="logo"
        src="../public/img/logo.png"
        alt="une terre avec un pins rouge au couleur de notre charte"
      />

      <nav
        className={`navbar ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ul className="navbar-links">
          <Link to="/about" type="link">
            About
          </Link>

          <Link to="/" type="link">
            Home
          </Link>

          <Link to="/contact/123" type="link">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
