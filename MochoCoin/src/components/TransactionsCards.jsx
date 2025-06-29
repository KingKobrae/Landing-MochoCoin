import React from 'react'
import FAQCard from './FAQCard'
import classes from './TransactionsCards.module.css'

const transactionsCardsInfo = [
    {
        id: 1,
        title: '¿Cuánto cuesta enviar Mochocoins?',
        text: 'Las comisiones de transacción son mínimas, típicamente entre $0.01 y $0.05 USD por transacción, independientemente del monto enviado. Esto es significativamente menor que las comisiones bancarias tradicionales o servicios de remesas.',
    },
    {
        id: 2,
        title: '¿Cuánto tiempo tarda una transacción?',
        text: 'Las transacciones de Mochocoin se confirman en promedio entre 2-3 minutos. Para transacciones de alto valor, se recomienda esperar 6 confirmaciones (aproximadamente 12 minutos) para máxima seguridad.',
    },
    {
        id: 3,
        title: '¿Puedo convertir Mochocoins a Bolívares o Dólares?',
        text: 'Sí, puedes intercambiar Mochocoins por bolívares, dólares o pesos colombianos a través de exchanges venezolanos autorizados o peer-to-peer. También hay cajeros automáticos de criptomonedas en principales ciudades del país.',
    },
]

function TransactionsCards() {
  return (
    <article className={classes.TransactionsCards_container}>
        {
            transactionsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <FAQCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default TransactionsCards