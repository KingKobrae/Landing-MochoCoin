import React from 'react'
import MiningCard from './MiningCard'
import classes from './MiningCards.module.css'

const miningCardsInfo = [
    {
        id: 1,
        title: 'Transacción Iniciada',
        number: 1,
        bg: '#294BBA',

    },
    {
        id: 2,
        title: 'Verificación',
        number: 2,
        bg: '#3AAE30',

    },
    {
        id: 3,
        title: 'Minería',
        number: 3,
        bg: '#CE840D',

    },
    {
        id: 4,
        title: 'Confirmación',
        number: 4,
        bg: '#7F0CD7',

    }
]


function MiningCards() {
    return (
      <article className={classes.Tech_container}>
          {
              miningCardsInfo.map(card => (
                  <div key={card.id} className={classes.text_container}>
                      <MiningCard title={card.title} number={card.number} bg={card.bg}/>
                  </div>
              ))
          }
      </article>
    )
  }

export default MiningCards