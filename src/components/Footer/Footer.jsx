import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtem o ano atual

  return (
    <footer className="footer-container">
      <p>
        &#169; {currentYear} AFPS. Todos os direitos reservados. Desenvolvido
        por{" "}
        <a
          href="https://mau-me.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maume
        </a>
      </p>
    </footer>
  );
};

export default Footer;
