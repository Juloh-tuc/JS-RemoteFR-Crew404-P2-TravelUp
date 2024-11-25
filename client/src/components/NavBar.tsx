import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../components/NavBar.css";
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {location.pathname === "/" && (
        <img
          className="logo"
          src={logo}
          alt="une terre avec un pins rouge au couleur de notre charte"
        />
      )}
      <nav className="navbar">
        <div className="navbar-header">
          <button
            className="burger-menu"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/contact/123" onClick={() => setIsMenuOpen(false)}>
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li>
            <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>
              <FaQuestionCircle /> Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
