import React from 'react'
import ButtonLink from '../components/ButtonLink'
import classes from './ChartButtons.module.css'

const chartButtonsInfo = [
    {
        id: 1,
        text: 'Comprar MCO',
        bg: '#0F8B18',
        link: '#',
        color: '#FFF',
    },
    {
        id: 2,
        text: 'Ver gráfico completo',
        bg: '#272ACC',
        link: '#',
        color: '#FFF',
    },
]

function ChartButtons() {
  return (
    <div className={classes.ChartButtons_container}>
        {
            chartButtonsInfo.map(card => (
                <div key={card.id} className={classes.Button_container}>
                    <ButtonLink text={card.text} link={card.link} bg={card.bg} textColor={card.color}/>
                </div>
            ))
        }
      </div>
  )
}

export default ChartButtons