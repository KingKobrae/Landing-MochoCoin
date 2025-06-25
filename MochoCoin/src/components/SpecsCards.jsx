import React from 'react'
import classes from './SpecsCards.module.css'
import TechnicalCard from './TechnicalCard'
import { Grid } from '@mui/material'

const specsCardsInfo = [
  {
    id: 1,
    title: 'Minería Descentralizada',
    text: 'Los mineros venezolanos validan transacciones y mantienen la seguridad de la red.',

  },
  {
    id: 2,
    title: 'Validación de Transacciones',
    text: 'Cada transacción es verificada por múltiples nodos antes de ser confirmada.',

  },
  {
    id: 3,
    title: 'Blockchain Transparente',
    text: 'Todas las transacciones quedan registradas en un libro público inmutable.',

  },
  {
    id: 4,
    title: 'Consenso Distribuido',
    text: 'La red opera sin autoridad central, controlada por la comunidad.',

  },
]

function SpecsCards() {
  return (
    <div className={classes.SpecsCards_container}>
      <Grid direction={'row'} container>
        {
          specsCardsInfo.map(card => (
            <Grid size={5} className={classes.card_container} key={card.id}>
              <TechnicalCard  title={card.title} text={card.text}/>
            </Grid>
          ))
        }
      </Grid>
  </div>
  )
}

export default SpecsCards