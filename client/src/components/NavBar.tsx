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
      <nav className="navbar">
        <img
          className="logo"
          src={logo}
          alt="une terre avec un pins rouge au couleur de notre charte"
        />
        <button className="burger-menu" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/contact/123">
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li>
            <Link to="/quiz">
              <FaQuestionCircle /> Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
