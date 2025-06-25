import React from 'react'
import classes from './TechnicalCards.module.css'
import TechnicalCard from './TechnicalCard'

const info = [
    {
        id: 1,
        title: 'Algoritmo',
        text: 'SHA-256',

    },
    {
        id: 2,
        title: 'Tiempo de Bloque',
        text: '2 minutos',

    },
    {
        id: 3,
        title: 'Suministro Total',
        text: '21 millones MCO',

    },
    {
        id: 4,
        title: 'Consenso',
        text: 'Proof of Work',

    }
]

function TechnicalCards() {
  return (
    <article className={classes.Tech_container}>
        {
            info.map(card => (
                <div key={card.id} className={classes.text_container}>
                    <TechnicalCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default TechnicalCards