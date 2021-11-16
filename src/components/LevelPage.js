import React, {useEffect, useState} from 'react'

function LevelPage() {

    const [user, setUser] = useState()
    const [level, setLevel] = useState()
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
       fetch("http://localhost:9292/levels/questions/1")
       .then((resp)=>resp.json())
       .then((levelData)=>{
           setLevel(levelData)
        //    setIsLoaded(true)
        })
    }, [])

    // function handleLevelClick(){
    //     setShowLevel(!showLevel)
    // }
   
return user && level ? 
     (
        <div>
            <h2>{level["name"]}</h2>
            <form>
            {level["questions"][0]["question"]}
            <input placeholder="answer"/>
            <button>submit</button>
            </form>
            <h3>{user["name"]} The {user["avatar"]["name"]}</h3>
            <img src={user["avatar"]["image_url"]} height="200" width="200"/>
        </div>
    )
    : "Loading"
}


export default LevelPage;