import React from 'react'
import classes from './OfficesCards.module.css'
import OfficesCard from './OfficesCard'

const officesCardsInfo = [
    {
        id: 1,
        title: 'Caracas',
        text1: 'Av. Francisco de Miranda, Centro Lido',
        text2: '+58 212-XXX-XXXX',
        text3: 'caracas@mochocoin.ve',
    },
    {
        id: 2,
        title: 'Punto Fijo',
        text1: 'Av. 5 de Julio, Centro Comercial Doral',
        text2: '+58 261-XXX-XXXX',
        text3: 'puntofijo@mochocoin.ve',
    },
    {
        id: 3,
        title: 'Valencia',
        text1: 'Av. Bolívar Norte, Torre Carabobo',
        text2: '+58 241-XXX-XXXX',
        text3: 'alencia@mochocoin.ve',
    },
]

function OfficesCards() {
  return (
    <article className={classes.OfficesCards_container}>
        {
            officesCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <OfficesCard title={card.title} text1={card.text1} text2={card.text2} text3={card.text3}/>
                </div>
            ))
        }
    </article>
  )
}

export default OfficesCards