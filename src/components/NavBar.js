import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
      <h2>Monster Code - Answer Questions To Fight And Collect Monsters</h2>
        <NavLink to='/'>Login </NavLink>
        {/* <NavLink to='/level'>Levels </NavLink>        */}
        <NavLink to='/score'>Scores </NavLink>
        
    </div>
  );
}

export default NavBar;