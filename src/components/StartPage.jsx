import React from 'react'

const StartPage = ({ onStart }) => {
  return (
    <div className="start-page">
      <div className="start-container">
        <button className="start-button" onClick={onStart}>
          START
        </button>
      </div>
    </div>
  )
}

export default StartPage