import React from 'react'
import classes from '././HomeCards.module.css'
import TemplateCard from './TemplateCard'
import ShieldCheck from './ShieldCheck'
import ClockRotateLeft from './ClockRotateLeft'
import ChartTrending from './ChartTrending';
import Grid from '@mui/material/Grid';

const homeCards = [
    {
        id: 1,
        title: 'Seguridad Mejorada',
        icon: <ShieldCheck />,
        text: 'Construido 100% sobre tecnología blockchain, Mochocoin garantiza que sus transacciones sean seguras y transparentes.',
    },
    {
        id: 2,
        title: 'Transacciones Rápidas',
        icon: <ClockRotateLeft />,
        text: 'Experimente transacciones casi instantáneas, lo que permite pagos rápidos y eficientes.',
    },
    {
        id: 3,
        title: 'Valor estable',
        icon: <ChartTrending />,
        text: 'El algoritmo único de Mochocoin proporciona un valor estable, protegiendo sus inversiones de la volatilidad del mercado.',
    }
]


function HomeCards() {
  return (
    <div className={classes.template}>
       
        <Grid direction="rows" container >
            {
                homeCards.map(templateCard => (
                    <Grid size={3} key={templateCard.id} >
                            
                        <TemplateCard title={templateCard.title} icon={templateCard.icon} text={templateCard.text}/>
                            
                    </Grid>
                ))
            }
        </Grid>
        

    </div>
  )
}

export default HomeCards