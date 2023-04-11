import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Design inspired by <span className="copyright-symbol">&copy;</span>{" "}
        <a
          href="https://hanidamlaj.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hani-damlaj-link"
        >
          Hani Damlaj
        </a>
      </p>
    </footer>
  );
};

export default Footer;
