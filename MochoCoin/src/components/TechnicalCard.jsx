import React from 'react'
import classes from './TechnicalCard.module.css'

function TechnicalCard({text, title}) {
  return (
    <div className={classes.text_container}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default TechnicalCard