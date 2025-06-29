import React from 'react'
import FAQCard from './FAQCard'
import classes from './SecurityCards.module.css'

const securityCardsInfo = [
    {
        id: 1,
        title: '¿Qué tan seguro es Mochocoin?',
        text: 'Mochocoin utiliza criptografía de grado militar (SHA-256) y tecnología blockchain probada. Cada transacción es verificada por múltiples nodos en la red, haciendo prácticamente imposible el hackeo o falsificación. Tu wallet está protegido por claves privadas que solo tú controlas.',
    },
    {
        id: 2,
        title: '¿Puede el gobierno confiscar mis Mochocoin?',
        text: 'No. A diferencia de las cuentas bancarias tradicionales, los Mochocoins están bajo tu control total. Solo tú tienes acceso a tus claves privadas, lo que significa que nadie más puede acceder o confiscar tus fondos, ni siquiera el gobierno o bancos.',
    },
    {
        id: 3,
        title: '¿Qué pasa si pierdo mi wallet?',
        text: 'Al crear tu wallet, recibes una frase de recuperación (seed phrase) de 12-24 palabras. Esta frase te permite recuperar tu wallet en cualquier dispositivo. Es crucial guardar esta frase en un lugar seguro y nunca compartirla con nadie.',
    },
]

function SecurityCards() {
  return (
    <article className={classes.SecurityCards_container}>
        {
            securityCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <FAQCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default SecurityCards