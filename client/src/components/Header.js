import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo}></img>
      </div>
      <nav className="header-links">
        <ul>
          <li>Introducere</li>
          <li>Endpoints</li>
          <li>Javascript</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
