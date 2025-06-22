import React from 'react'
import classes from './AboutCard.module.css'

function AboutCard({title, icon, text}) {
  return (
    <article className={classes.card_container}>
        {icon}
        <div className={classes.info}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
    </article>
  )
}

export default AboutCard