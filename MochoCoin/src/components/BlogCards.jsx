import React from 'react'
import BlogCard from './BlogCard'
import classes from './BlogCards.module.css'
import Swallet from '../assets/security_Wallet.png'
import VeneCrypto from '../assets/Venezuela-crypto-Card.png'
import Mining from '../assets/Mining_section.jpg'

const blogCardsInfo = [
    {
        id: 1,
        url: Swallet,
        date: '2/6/2025',
        time: '7min',
        title: 'Cómo Proteger tu Wallet de Mochocoin: Guía de Seguridad Completa',
        text: 'Aprende las mejores prácticas para mantener tus Mochocoins seguros y proteger tu inversión de amenazas comunes.',
        author: 'Por María González',
        link: '#',
    },
    {
        id: 2,
        url: VeneCrypto,
        date: '1/6/2025',
        time: '4min',
        title: '500+ Comercios Venezolanos Ahora Aceptan Mochocoin',
        text: 'La red de aceptación continúa expandiéndose con nuevos partnerships en Caracas, Maracaibo y Valencia.',
        author: 'Por Carlos Rodríguez',
        link: '#',
    },
    {
        id: 3,
        url: Mining,
        date: '31/5/2025',
        time: '5min',
        title: 'Actualización de Red: Mejoras en Velocidad de Transacciones',
        text: 'La nueva actualización reduce el tiempo de confirmación a 90 segundos y mejora la eficiencia energética en un 40%.',
        author: 'Por Equipo Técnico',
        link: '#',
    },
]

function BlogCards() {
  return (
    <article className={classes.BlogCards_container}>
        {
            blogCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <BlogCard url={card.url} date={card.date} time={card.time} title={card.title} text={card.text} author={card.author} link={card.link}/>
                </div>
            ))
        }
    </article>
  )
}

export default BlogCards