import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>Login </NavLink>
        <br/>
        <NavLink to='/level'>Levels </NavLink>
        <br/>
        <NavLink to='/score'>Scores </NavLink>
        <br/>
    </div>
  );
}

export default NavBar;