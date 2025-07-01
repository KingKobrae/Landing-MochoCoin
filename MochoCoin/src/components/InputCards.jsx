import React from 'react'
import classes from './InputCards.module.css'
import InputCard from './InputCard'
import { Grid } from '@mui/material'

const inputCardsInfo = [
    {
        id: 1,
        text: 'Nombre Completo *',
        example: 'Tu nombre completo',
        type: 'text'
    },
    {
        id: 2,
        text: 'Email *',
        example: 'tu-email@ejemplo.com',
        type: 'email'
    },
    {
        id: 3,
        text: 'Tipo de Consulta',
        example: 'Consulta General',
        type: 'text'
    },
    {
        id: 4,
        text: 'Asunto *',
        example: 'Breve descripción del tema',
        type: 'text'
    },
]

function InputCards() {
  return (
    <Grid className={classes.InputCard_container} direction={'row'} container rowGap={4}>
        {
            inputCardsInfo.map(card => (
                <Grid size={5} className={classes.Card_container} key={card.id}>
                    <InputCard text={card.text} example={card.example} type={card.type}/>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default InputCards