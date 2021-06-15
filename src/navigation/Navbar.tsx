import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="navLink" activeClassName="active" to="/">Home</NavLink>
      <NavLink className="navLink" activeClassName="active" to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
