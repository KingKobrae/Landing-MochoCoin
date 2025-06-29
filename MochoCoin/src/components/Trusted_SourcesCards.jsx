import React from 'react'
import Trusted_SourcesCard from './Trusted_SourcesCard.jsx'
import classes from './Trusted_SourcesCards.module.css'
import { BsClock } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoShieldOutline } from "react-icons/io5";

const trusted_SourcesCardsInfo = [
    {
        id: 1,
        link: '#',
        icon: <BsClock size={60} color='#C2B200'/>,
        linkText: 'Ver Tutoriales',
        text: 'Tutoriales paso a paso',
        title: 'Guías Rápidas',
    },
    {
        id: 2,
        link: '#',
        icon: <GoPeople size={60} color='#02881B'/>,
        linkText: 'Telegram',
        text: 'Únete a nuestro grupo',
        title: 'Comunidad',
    },
    {
        id: 3,
        link: '#',
        icon: <IoShieldOutline size={60} color='#8400B8'/>,
        linkText: 'Aprender',
        text: 'Mejores prácticas',
        title: 'Centro de Seguridad',
    },
]

function Trusted_SourcesCards() {
  return (
    <article className={classes.Trusted_SourcesCards_container}>
        {
            trusted_SourcesCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <Trusted_SourcesCard icon={card.icon} text={card.text} link={card.link} linkText={card.linkText} title={card.title}/>
                </div>
            ))
        }
    </article>
  )
}

export default Trusted_SourcesCards