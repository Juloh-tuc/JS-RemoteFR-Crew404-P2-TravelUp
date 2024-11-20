import { useState } from "react";
import "../components/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <img
        className="logo"
        src={logo}
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

          <Link to="/quiz" type="link">
            Quiz
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
