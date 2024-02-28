import React from 'react'

const Modal = ({isCorrect, solution, turn, definition}) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1 className='title'>You Win!</h1>
          <p className="solution">Solutions: {solution}</p>
          <p>{definition}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Better luck next time:)</h1>
          <p className="solution">Solution: {solution}</p>
          <p>{definition}</p>
        </div>
      )}
    </div>
  )
}

export default Modal