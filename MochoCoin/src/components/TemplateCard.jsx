import React from 'react'
import classes from '././TemplateCard.module.css'


function TemplateCard({title, icon, text}) {
  return (
    
    <article className={classes.container}>
        <div className={classes.title}>
          <div className={classes.icon}>{icon}</div>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
    </article>


  )
}

export default TemplateCard