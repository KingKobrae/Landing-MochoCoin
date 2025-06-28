import React from 'react'
import HistorialCard from './HistorialCard'
import classes from './HistorialCards.module.css'

const historialCardsInfo = [
    {
        id: 1,
        number: '+12.3%',
        date: '1 Semana',
    },
    {
        id: 2,
        number: '+35.7%',
        date: '1 Mes',
    },
    {
        id: 3,
        number: '+89.2%',
        date: '3 Meses',
    },
    {
        id: 4,
        number: '+245.7%',
        date: '1 Año',
    },
]

function HistorialCards() {
  return (
    <article className={classes.HistorialCards_container}>
        {
            historialCardsInfo.map(card => (
                <div className={classes.Card_container}>
                    <HistorialCard number={card.number} date={card.date}/>
                </div>
            ))
        }
    </article>
  )
}

export default HistorialCards