import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <h1>Our Coding Game</h1>
        <NavLink to='/'>Login </NavLink>
        <NavLink to='/level'>Levels </NavLink>       
        <NavLink to='/score'>Scores </NavLink>
    </div>
  );
}

export default NavBar;