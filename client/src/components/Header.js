import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#ff484a",
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logoAPI"></img>
      </div>
      <nav className="header-links">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Introducere
            </NavLink>
          </li>
          <li>
            <NavLink
              to="endpoints"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Endpoints
            </NavLink>
          </li>
          <li>
            <NavLink
              to="javascript"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Javascript
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
