import React, {useState} from 'react'
import { Button, Form, Card, Icon, Image } from "semantic-ui-react";


function QuestionCard({level, monster, user, updateLevel}) {
    const [formData, setFormData] = useState("")
    const [questionNum, setQuestionNum] = useState(0)
    const squareUrl = "http://jahprovides.xyz/wp-content/uploads/2021/11/square.png"
    const boompow = "http://jahprovides.xyz/wp-content/uploads/2021/11/boompow.png"

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if(questionNum === 2 && formData === level["questions"][questionNum]["answer"]){
            updateLevel()
            alert("Next Level!")
            setQuestionNum(0)
        }
        else if(formData === level["questions"][questionNum]["answer"]){
            setQuestionNum(questionNum + 1)
            console.log(questionNum)
        }
        setFormData("")
    }

    const handleFormChange = (e) => {
        setFormData(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div>
            
            <Form>
               <Form.Field> {level["questions"][questionNum]["question"]}
                <input type = "text" placeholder = "answer"  value={formData} onChange={handleFormChange}/></Form.Field>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>

            
            <div class="grid-container">
                
            <div class="grid-item">
                {questionNum === 0 ? <h3><center>{user["name"]} the {user["avatar"]["name"]}</center></h3>: null}
                {questionNum === 0 ? <center><Image src={user["avatar"]["image_url"]} height="200" width="200"/></center> : <center><Image src ={squareUrl} alt="test"  height="200" width="200"/></center>}
            </div>
            <div class="grid-item">
                {questionNum === 1 ? <h3><center>{user["name"]} the {user["avatar"]["name"]}</center></h3>: null}
                {questionNum === 1 ? <center><Image src={user["avatar"]["image_url"]} height="200" width="200"/></center> : <center><Image src ={squareUrl} height="200" width="200"/></center>}
            </div>
            <div class="grid-item">
                {questionNum === 2 ? <h3><center>{user["name"]} the {user["avatar"]["name"]}</center></h3>: null}
                {questionNum === 2 ? <center><Image src={user["avatar"]["image_url"]} height="200" width="200" /></center> : <center><Image src ={squareUrl} height="200" width="200"/></center>}
            </div>
            <div class="grid-item">
                {/* {questionNum === 2 ? <h3>{user["name"]} the {user["avatar"]["name"]} ATTACKS!!!</h3>: null} */}
                {questionNum === 2 ? <center><Image src={boompow} height="200" width="200"/></center> : <center><Image src={squareUrl} height="200" width="200"/></center>}
            </div>
 
  <div class="grid-item"> 
        <h3><center>{monster["monsters"][0]["name"]} the Monster</center></h3>
            <center><Image src={monster["monsters"][0]["image_url"]} height="200" width="200"/></center></div> 
</div>

        </div>
    )
}
export default QuestionCard;