import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'
import AvatarCard from './AvatarCard';
import UserContainer from './UserContainer';
import { Container } from 'semantic-ui-react';




function App() {
  const [allAvatars, setAllAvatars] = useState([])
  const [allMonsters, setAllMonsters] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/avatars')
    .then(res => res.json())
    .then(data => setAllAvatars(data))
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:9292/monsters')
  //   .then(res => res.json())
  //   .then(data => setAllMonsters(data))
  // }, []);

  

  return (

    <Container>
      <div className="App">
        <NavBar />
        <UserContainer allAvatars={allAvatars}/>
        <Routes>
          <Route path="/"> </Route>
          <Route path="/"> </Route>
          <Route exact path="/"></Route>
        </Routes>
      </div>
    </Container>

    // <>
    // <div className="header">
    // <h2 className="App">
    //  Monster game
    // </h2>

    // <form >
    //   <input placeholder="enter username" />
    //   <input placeholder="paste avatar image url"/>
    //   <button>Begin</button>
    // </form>
    // <h1>Level 1</h1>
    // <h3>Question 1</h3>
    // <form>
    //   What variable cannot be reassigned in javaScript?
    //   <input placeholder="answer"/>
    //   <button>Submit</button>
    // </form>
    // </div>
    // <img className="user_img" height="150" width="150" src="https://i.pinimg.com/originals/32/77/bc/3277bc83ceab26ba47b99e2d1d1097fb.jpg"/>
    // <img className="user_img_2" height="150" width="150" src="https://i.pinimg.com/originals/32/77/bc/3277bc83ceab26ba47b99e2d1d1097fb.jpg"/>
    // <img className="monster" height="100" width="100" src="https://media.istockphoto.com/vectors/funny-cartoon-monster-vector-id853871352"/>
    // </>
  )
}

export default App;
