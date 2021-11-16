import React, {useEffect, useState} from 'react'
import QuestionCard from './QuestionCard'

function LevelPage() {

    const [user, setUser] = useState()
    const [level, setLevel] = useState()
    const [levelNum, setLevelNum] = useState(1)
    const [monster, setMonster] = useState()
    // const [loadNewLevel, setLoadNewLevel] = useState()
    // const [showLevel, setShowLevel] = (true)
    // const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/user/current")
        .then((resp)=>resp.json())
        .then((data)=>{
            setUser(data)
            // setIsLoaded(true)
        })
    }, [])

    useEffect(() => {
       fetch(`http://localhost:9292/levels/questions/${levelNum}`)
       .then((resp)=>resp.json())
       .then((levelData)=>{
           setLevel(levelData)
           // setIsLoaded(true)
        })
        fetch(`http://localhost:9292/levels/monster/${levelNum}`)
       .then((resp)=>resp.json())
       .then((monsterData)=>{
           setMonster(monsterData)
           console.log(monsterData)
           // setIsLoaded(true)
        })

    }, [levelNum])

    // function handleLevelClick(){
    //     setShowLevel(!showLevel)
    // }
    
    const updateLevel = () => {
        console.log("level updated!")
        if(levelNum === 5){
            alert("big W!")
            setLevelNum(1)
        }
        else{
            setLevelNum(levelNum + 1)
            // setLoadNewLevel(levelNum)
        }
    }
    return user && level && monster?
        (
        <div>
            <h2>{level["name"]}</h2>
            <QuestionCard level={level} user={user} updateLevel={updateLevel}/>
            <h3>{user["name"]} the {user["avatar"]["name"]}</h3>
            <img src={user["avatar"]["image_url"]} height="200" width="200"/>

            <h3>{monster["monsters"][0]["name"]} the Monster</h3>
            <img src={monster["monsters"][0]["image_url"]} height="200" width="200"/>
        </div>
        ) : "Loading"
}


export default LevelPage;