import React from 'react'
import FAQCard from './FAQCard'
import classes from './UsageCards.module.css'

const usageCardsInfo = [
    {
        id: 1,
        title: '¿Dónde puedo usar Mochocoins en Venezuela?',
        text: 'Mochocoins son aceptados en más de 500 comercios en Venezuela, incluyendo supermercados, farmacias, restaurantes y tiendas online. La red de aceptación crece diariamente, especialmente en Caracas, Maracaibo, Valencia y Punto Fijo.',
    },
    {
        id: 2,
        title: '¿Cómo compro mis primeros Mochocoins?',
        text: 'Puedes comprar Mochocoins a través de nuestra app oficial usando transferencias bancarias, Zelle, PayPal, o efectivo en puntos de venta autorizados. También puedes comprar a otros usuarios a través de nuestro marketplace P2P integrado.',
    },
    {
        id: 3,
        title: '¿Necesito conocimientos técnicos para usar Mochocoins?',
        text: 'No. Nuestra app móvil está diseñada para ser tan fácil de usar como cualquier app bancaria. Solo necesitas saber enviar mensajes de texto para poder usar Mochocoins. Ofrecemos tutoriales y soporte 24/7 en español.',
    },
]

function UsageCards() {
  return (
    <article className={classes.UsageCards_container}>
        {
            usageCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <FAQCard title={card.title} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default UsageCards