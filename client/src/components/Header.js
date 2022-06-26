import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo}></img>
      </div>
      <nav className="header-links">
        <ul>
          <li>
            <NavLink to="/" activeClassName="nav-active-link">
              Introducere
            </NavLink>
          </li>
          <li>
            <NavLink to="endpoints" activeClassName="nav-active-link">
              Endpoints
            </NavLink>
          </li>
          <li>
            <NavLink to="javascript" activeClassName="nav-active-link">
              Javascript
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
