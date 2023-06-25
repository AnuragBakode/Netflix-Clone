import React,{useState} from 'react';
import './Question.css'

function Question(props) {
    const  [Toggle , setToggle] = useState(false)
    const handleQuestionHandle = (e) =>{
        Toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div className={`question ${Toggle && "active"}`}>
            <div className="headQuestion" onClick = {handleQuestionHandle}>
                <p>{props.title}</p>
                <p className="icon">+</p>

            </div>
            <div className={`description ${Toggle && "show"}`}>
                <p>{props.desc}</p>             
            </div>
        </div>
    )
}

export default Question;
