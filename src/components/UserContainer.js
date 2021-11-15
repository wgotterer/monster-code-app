import React from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AvatarCard from './AvatarCard'
// import { Card } from "semantic-ui-react";


function UserContainer({allAvatars}){
    console.log(allAvatars)
    
    return(
        <div className="UserContainer">
            <h1>User Container</h1>
            <h3>Select your user:</h3>
            <form>
                <input placeholder="username" />
                <button>Submit</button>
            </form>
           
            <h3>Select Your Avatar</h3>
            {allAvatars.map(avatar =>
            <AvatarCard avatar={avatar} key={avatar.id}/>)}
            
        </div>
    )
}

export default UserContainer