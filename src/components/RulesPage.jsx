import React from 'react'

const RulesPage = ({ onNext }) => {
  return (
    <div className="rules-page">
      <div className="rules-container">
        <h1>Rules des Quizes</h1>
        
        <div className="rules-content">
          <ol>
            <li>Quiz besteht aus 26 Fragen</li>
            <li>Jede Frage hat 4 Antworten</li>
            <li>Nur ein Antwort ist richtig</li>
            <li>Du kannst ein mal "Help von Freundin" benutzen</li>
            <li>Nach dem Auswahl click auf "WEITER"</li>
            <li>Du kriegst das Geschenk wenn würde alle Fragen richtig beantworten</li>
            <li>Viel Erfolg mein Schatzi!</li>
          </ol>
        </div>
        
        <button className="next-button" onClick={onNext}>
          WEITER →
        </button>
      </div>
    </div>
  )
}

export default RulesPage