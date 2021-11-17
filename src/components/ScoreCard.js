import React, {useState} from 'react'
import { Button, Form, Card, Icon, Image } from "semantic-ui-react";

 function ScoreCard({user, monsterList}) {

    const [userMonsters, setUserMonsters] = useState(monsterList.filter((monster) => {
        return (
            monster.id <= user.level_id
        )
    }))

    console.log(userMonsters)

        // for (let i = 0; i < user.level_id; i++) {
        //     setUserMonsters([monsterList[i], ...userMonsters]) 
        // }
        // console.log(monsterList)

       const monsterImage =  userMonsters.map((monster)=><img src={monster.image_url} height="60" width="60"/>)

    
    




    return  (
        <div>
            <h3>{user.name}</h3>{monsterImage} 
        </div>
    )
}

export default ScoreCard