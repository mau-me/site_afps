import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">
        Associação de Futebol de Porto dos Santos
      </h1>
      <nav className="nav-links">
        <div className="nav-links-right">
          <Link to="/">Home</Link>
          <Link to="/players">Jogadores</Link>
          <Link to="/gallery">Galeria de Fotos</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
