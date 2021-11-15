import React from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import AvatarCard from './AvatarCard'



const user = [
    { value: 'jesse', label: 'Jesse' },
    { value: 'leo', label: 'Leo' },
    { value: 'william', label: 'William' }
]
function NavBar ({allAvatars}) {
  return (
    <div className="nav">
      <h1>NavBar</h1>
      <h3>Select your user:</h3>
      <Select options={user} />
      <h3>Select Your Avatar</h3>
    </div>
  );
}


export default NavBar;