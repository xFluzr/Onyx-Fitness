import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './faqQuestion.css'
import { useState } from "react"


const FaqQuestion = ({question,answer}) => {
  const [showAnswer,setShowAnswer]=useState(false);

  const answerHandler=()=>{
    setShowAnswer(!showAnswer);
  }

  return (
    <div className='question__box'>
        <div className="question__top" onClick={answerHandler}>
            <h3 className='question__title'>{question}</h3>
            {!showAnswer?<FontAwesomeIcon className="show-answer__icon plus__icon" icon={faPlus}/>:<FontAwesomeIcon className="show-answer__icon minus__icon" icon={faMinus}/>}
        </div>
      <div className='question__body'>
        <p className={`answer__wrapper ${showAnswer?'text__showed':'text__hidden'}`}>{answer}</p>
      </div>
    </div>
  )
}

export default FaqQuestion