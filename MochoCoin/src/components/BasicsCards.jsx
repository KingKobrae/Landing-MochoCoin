import React from 'react'
import FAQCard from './FAQCard'
import classes from './BasicsCards.module.css'

const basicsCardsInfo = [
    {
        id: 1,
        title: '¿Qué es exactamente Mochocoin?',
        text: 'Mochocoin es una criptomoneda descentralizada diseñada específicamente para el mercado venezolano. Utiliza tecnología blockchain para ofrecer transacciones seguras, rápidas y sin intermediarios, proporcionando una alternativa estable al bolívar y una opción de inversión al dólar.',
    },
    {
        id: 2,
        title: '¿Por qué debería usar Mochoin en lugar del dólar?',
        text: 'Mientras que el dólar mantiene su valor, Mochocoin ofrece potencial de crecimiento además de estabilidad. No requiere acceso físico a billetes, permite transacciones 24/7, no tiene restricciones bancarias y puede generar rendimientos a través de staking o holding a largo plazo.',
    },
    {
        id: 3,
        title: '¿Es legal usar criptomonedas en Venezuela?',
        text: 'Sí, el uso de criptomonedas es legal en Venezuela. El gobierno ha reconocido oficialmente las criptomonedas y ha establecido regulaciones para su uso. Mochocoin cumple con todas las normativas locales y requisitos regulatorios venezolanos.',
    },
]

function BasicsCards() {
  return (
    <article className={classes.BasicsCards_container}>
        {
            basicsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <FAQCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default BasicsCards