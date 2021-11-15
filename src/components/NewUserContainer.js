import React, {useState} from "react";
import AvatarCard from './AvatarCard'
import { Card } from "semantic-ui-react";


function NewUserContainer({allAvatars}){
    // console.log(allAvatars)
    const [userInfo, setUserInfo] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        avatar_id: ""
    })
    const [avatarId, setAvatarId] = useState(0)

    const submitUser = (e) => {
        e.preventDefault()
        const newUser = {
            name: formData.name,
            avatar_id: avatarId
        };
        console.log(newUser)
        fetch("http://localhost:9292/users", {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
    }

    const handleFormChange = (e) => {
        setFormData(currentFormData => Object.assign({...currentFormData}, {[e.target.name]:e.target.value}))
    }

    const handleImageClick = (id) => {
        setAvatarId(id)
    }

    return(
        <div className="UserContainer">
            
            <h1>User Container</h1>
            <h3>Select your user:</h3>
            <form>
                <input type = "text" placeholder="username" name="name" value={formData.name} onChange={handleFormChange}/>
                <button onClick= {submitUser}>submit</button>
            </form>
            <h3>Select Your Avatar</h3>
            <Card.Group itemsPerRow={5}>
                {allAvatars.map(avatar => <AvatarCard avatar={avatar} key={avatar.id} handleImageClick={handleImageClick}/>)}
            </Card.Group>
        </div>
    )
}

export default NewUserContainer