import React from 'react'
import FAQCard from './FAQCard'
import classes from './InvestmentCards.module.css'

const investmentCardsInfo = [
    {
        id: 1,
        title: '¿Es Mochocoin una buena inversión?',
        text: 'Mochocoin ha mostrado crecimiento constante desde su lanzamiento, con retornos superiores al 200% anual. Sin embargo, como cualquier inversión, conlleva riesgos. Se recomienda solo invertir lo que puedas permitirte perder y diversificar tu portafolio.',
    },
    {
        id: 2,
        title: '¿Puedo ganar dinero manteniendo Mochocoins?',
        text: 'Sí, ofrecemos varias opciones: Staking (gana 8-12% anual), programa de referidos (gana hasta 5% por cada persona que invites), y recompensas por participar en la red como nodo validador.',
    },
    {
        id: 3,
        title: '¿Cual es la proyección de precio a largo plazo?',
        text: 'Nuestros analistas proyectan un precio objetivo de $5-8 USD para finales de 2025, basado en adopción, utilidad y escasez programada. Sin embargo, las criptomonedas son volátiles y estas son solo estimaciones, no garantías.',
    },
]

function InvestmentCards() {
  return (
    <article className={classes.InvestmentCards_container}>
        {
            investmentCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <FAQCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default InvestmentCards