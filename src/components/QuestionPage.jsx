import React, { useState } from 'react'
import HelpButton from './HelpButton'

const QuestionPage = ({ question, questionNumber, totalQuestions, onAnswer, onNext, userAnswer }) => {
  const [helpUsed, setHelpUsed] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (index) => {
    if (!userAnswer) {
      setSelectedOption(index)
      onAnswer(index)
    }
  }

  const handleHelp = () => {
    if (!helpUsed) {
     
      alert("Tipp: Küss mich jetzt!")
      setHelpUsed(true)
    }
  }

  return (
    <div className="question-page">
      <div className="question-container">
        <div className="question-header">
          <span>FRAGEN {questionNumber} з {totalQuestions}</span>
        </div>
        
        <div className="question-content">
          <h2>{question.question}</h2>
          
          <div className="options-container">
            {question.options.map((option, index) => {
              let optionClass = "option"
              
              if (userAnswer) {
                if (index === userAnswer.selected) {
                  optionClass += userAnswer.correct ? " correct" : " incorrect"
                }
                if (index === question.correctAnswer && !userAnswer.correct) {
                  optionClass += " correct-answer"
                }
              } else if (selectedOption === index) {
                optionClass += " selected"
              }
              
              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => handleOptionClick(index)}
                  disabled={!!userAnswer}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>
        
        <div className="question-footer">
          <HelpButton 
            onHelp={handleHelp} 
            used={helpUsed}
          />
          
          <button 
            className="next-question-button"
            onClick={onNext}
            disabled={!userAnswer}
          >
            {questionNumber < totalQuestions ? 'WEITER →' : 'ENDEN'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage