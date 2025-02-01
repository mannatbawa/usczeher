import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/zlogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <ScrollLink
            to="home"
            smooth={true}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="logo" />
          </ScrollLink>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <ScrollLink
              to="home"
              smooth={true}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="about-us"
              smooth={true}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="team"
              smooth={true}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Team
            </ScrollLink>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
