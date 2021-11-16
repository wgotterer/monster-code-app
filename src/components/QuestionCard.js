import React, {useState} from 'react'

function QuestionCard({level, user, updateLevel}) {
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
        </div>
    )
}
export default QuestionCard;