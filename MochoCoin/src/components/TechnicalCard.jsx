import React from 'react'
import classes from './TechnicalCard.module.css'

function TechnicalCard({text, title}) {
  return (
    <div className={classes.text_container}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TechnicalCard