import React from 'react'

const ResultsPage = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getResultMessage = () => {
    if (percentage == 100) return "BABBBYYYY SOOOOOOO SÜÜÜÜÜÜÜß. Ich liebe dich so dollllll mein Alles) Hier ist deine Belohnung..."
    if (percentage >= 90) return "Wie immer perfect Schatzi!Ich liebe dich so doll Baby!Hier ist dein Geschenk!!!!"
    if (percentage >= 70) return "GUUUUUUUUT MUA... aber musst noch mal machen auf 100 PROZENTTT!"
    if (percentage >= 50) return "Alter... Okay...Mach noch mal schnell!!!!"
    if (percentage <= 50) return "0 Kommentaren, mach noch mal..."
    return "Du kannst es noch mal machen)))"
  }

  return (
    <div className="results-page">
      <div className="results-container">
        <h1>Results</h1>
        
        <div className="score-circle">
          <div className="score-value">{score}/{totalQuestions}</div>
          <div className="score-percentage">{percentage}%</div>
        </div>
        
        <div className="result-message">
          <p>{getResultMessage()}</p>
        </div>
        
        <div className="results-details">
          <p>Richtige Antworten: <strong>{score}</strong></p>
          <p>Falsche Antworten: <strong>{totalQuestions - score}</strong></p>
        </div>
        
        <button className="restart-button" onClick={onRestart}>
          NOCH MAL
        </button>
      </div>
    </div>
  )
}

export default ResultsPage