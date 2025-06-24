import React from 'react'
import classes from './StepsCard.module.css'

function StepsCard({number, text, title, icon}) {
  return (
    <>
        <div className={classes.top}>
            <span>{number}</span>
            {icon}
        </div>
        <div className={classes.text}>

            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </>
  
  )
}

export default StepsCard