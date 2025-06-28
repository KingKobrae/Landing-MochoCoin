import React from 'react'
import LevelsCard from './LevelsCard'
import classes from './LevelsCards.module.css'

const levelsCardsInfo = [
    {
        id: 1,
        number: '$2.10',
        title: 'Soporte Fuerte',
        text: 'Nivel histórico de compra',
    },
    {
        id: 2,
        number: '$2.80',
        title: 'Resistencia 1',
        text: 'Primera barrera de venta',
    },
    {
        id: 3,
        number: '$3.20',
        title: 'Resistencia 2',
        text: 'Objetivo a mediano plazo',
    },
    {
        id: 4,
        number: '$5.00',
        title: 'Objetivo a Largo Plazo',
        text: 'Proyección en 12 meses',
    },
]

function LevelsCards() {
  return (
    <article className={classes.LevelsCards_container}>
        {
            levelsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <LevelsCard title={card.title} text={card.text} number={card.number}/>
                </div>
            ))
        }
    </article>
  )
}

export default LevelsCards