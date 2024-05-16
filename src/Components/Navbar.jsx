import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={(isActive) => {}}>
        Home
      </NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/team">Team</NavLink>
    </nav>
  );
};

export default Navbar;
