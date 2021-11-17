import React, {useEffect, useState} from 'react'
import ScoreCard from './ScoreCard';

function ScorePage() {

    const [userList, setUserList] = useState()
    const [monsterList, setMonsterList] = useState()

    useEffect(() => {
        
        fetch("http://localhost:9292/users/ordered")
            .then((resp)=>resp.json())
            .then((allUsers)=> setUserList(allUsers))

            fetch("http://localhost:9292/monsters")
            .then((resp)=>resp.json())
            .then((allMonsters)=> setMonsterList(allMonsters))

    }, [])

    console.log(monsterList)


    return userList && monsterList ?
     (
        <div className="scorecontainer">
            <h1>haha high scores</h1>
            {userList.map((user)=><ScoreCard monsterList={monsterList} user={user}/>)}
        </div>
    )
    : "Loading"
}

export default ScorePage;