import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="header">
    <h2 className="App">
     Monster game
    </h2>

    <form >
      <input placeholder="enter username" />
      <input placeholder="paste avatar image url"/>
      <button>Begin</button>
    </form>
    <h1>Level 1</h1>
    <h3>Question 1</h3>
    <form>
      What variable cannot be reassigned in javaScript?
      <input placeholder="answer"/>
      <button>Submit</button>
    </form>
    </div>
    <img className="user_img" height="150" width="150" src="https://i.pinimg.com/originals/32/77/bc/3277bc83ceab26ba47b99e2d1d1097fb.jpg"/>
    <img className="user_img_2" height="150" width="150" src="https://i.pinimg.com/originals/32/77/bc/3277bc83ceab26ba47b99e2d1d1097fb.jpg"/>
    <img className="monster" height="100" width="100" src="https://media.istockphoto.com/vectors/funny-cartoon-monster-vector-id853871352"/>
    </>
  );
}

export default App;
