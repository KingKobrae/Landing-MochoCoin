import React from 'react'
import classes from './ProCard.module.css'

function ProCard({title, text, icon}) {
  return (
    <article className={classes.container}>
        <div className={classes.title_container}>
            <div className={classes.img}>
              {icon}
            </div>
            <h3>{title}</h3>
        </div>
        <p>{text}</p>
    </article>
  )
}

export default ProCard