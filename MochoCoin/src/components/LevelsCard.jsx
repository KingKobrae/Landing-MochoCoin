import React from 'react'

function LevelsCard({title, text, number}) {
  return (
    <>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

        <span>{number}</span>
    </>
  )
}

export default LevelsCard