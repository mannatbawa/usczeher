import React from "react";
import "./Footer.css";
import { FaInstagram, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/usc_zeher/"
            target="_blank"
            className="instagram-icon"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScoZmQ0w22G8dt8MUmtwp_TKWUmO5yE81rtixRb9Z1r9w_4_w/viewform"
            target="_blank"
            className="interest-form-icon"
          >
            <FaLink size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
