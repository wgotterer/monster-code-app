import React, {useEffect, useState} from 'react'
import ScoreCard from './ScoreCard';
import { useHistory } from "react-router-dom";

function ScorePage() {

    let history = useHistory();
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

    function handleLoginPage(){
        history.push("/login")
    }


    return userList && monsterList ?
     (
        <div className="scorecontainer">
            <h1>HIGH SCORES</h1>
            {userList.map((user)=><ScoreCard monsterList={monsterList} user={user}/>)}
            <button className="loginbutton" onClick={handleLoginPage}>Take Me To The Login Page!</button>
        </div>
    )
    : "Loading"
}

export default ScorePage;