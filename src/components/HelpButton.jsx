import React from 'react'

const HelpButton = ({ onHelp, used }) => {
  return (
    <button 
      className={`help-button ${used ? 'used' : ''}`}
      onClick={onHelp}
      disabled={used}
    >
      Help von Freundin
      {used && <span className="help-used"> (used)</span>}
    </button>
  )
}

export default HelpButton