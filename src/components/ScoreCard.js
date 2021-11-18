import React, {useState} from 'react'
// import { Button, Form, Card, Icon, Image } from "semantic-ui-react";

 function ScoreCard({user, monsterList}) {
     
    // const [dispayUser, setDisplayUser] = useState(false)

    const [userMonsters, setUserMonsters] = useState(monsterList.filter((monster) => {
        return (
            monster.id <= user.level_id 
        )
    }))

    console.log(user, userMonsters)

       const monsterImage =  userMonsters.map((monster)=><img src={monster.image_url} height="60" width="60"/>)

   
    return  user.level_id > 0 ? (
        <div>
            <h3>{user.name}</h3>{monsterImage} 
        </div>
    )
    : null
}

export default ScoreCard