import React, {useState} from 'react'

function QuestionCard({level, monster, user, updateLevel}) {
    const [formData, setFormData] = useState("")
    const [questionNum, setQuestionNum] = useState(0)

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
            <form>
                {level["questions"][questionNum]["question"]}
                <input type = "text" placeholder = "answer" name="name" value={formData} onChange={handleFormChange}/>
                <button onClick={handleSubmit}>submit</button>
            </form>

            <div class="grid-container">
            <div class="grid-item">
                {questionNum === 0 ? <h3>{user["name"]} the {user["avatar"]["name"]}</h3>: null}
      {questionNum === 0 ? <img src={user["avatar"]["image_url"]} height="200" width="200"/> : null}</div>
  <div class="grid-item">
      {questionNum === 1 ? <h3>{user["name"]} the {user["avatar"]["name"]}</h3>: null}
      {questionNum === 1 ? <img src={user["avatar"]["image_url"]} height="200" width="200"/> : null}
      </div>
  <div class="grid-item">
    {questionNum === 2 ? <h3>{user["name"]} the {user["avatar"]["name"]}</h3>: null}
      {questionNum === 2 ? <img src={user["avatar"]["image_url"]} height="200" width="200"/> : null}
      </div>
  <div class="grid-item">
    {questionNum === 3 ? <h3>{user["name"]} the {user["avatar"]["name"]}</h3>: null}
      {questionNum === 3 ? <img src={user["avatar"]["image_url"]} height="200" width="200"/> : null}
      </div>
 
  <div class="grid-item"> 
        <h3>{monster["monsters"][0]["name"]} the Monster</h3>
            <img src={monster["monsters"][0]["image_url"]} height="200" width="200"/></div> 
</div>

        </div>
    )
}
export default QuestionCard;