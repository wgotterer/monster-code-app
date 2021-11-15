import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>Login </NavLink>
        <br/>
        {/* <NavLink to='/game'>Game </NavLink>
        <br/> */}
    </div>
  );
}

export default NavBar;