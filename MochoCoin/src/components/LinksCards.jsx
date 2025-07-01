import React from 'react'
import classes from './LinksCards.module.css'
import LinksCard from './LinksCard'
import { CiMail } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { CiClock1 } from "react-icons/ci";

const linksCardsInfo = [
    {
        id: 1,
        icon: <CiMail size={55} color='#3B82F6'/>,
        title: 'Email',
        link: '#',
        linktext: 'support@mochocoin.ve',
        text: 'Respuesta en 24 horas',
    },
    {
        id: 2,
        icon: <HiOutlinePhone size={55} color='#43DB14'/>,
        title: 'WhatsApp',
        link: '#',
        linktext: '+58 412-MOCHO-01',
        text: 'Respuesta inmediata',
    },
    {
        id: 3,
        icon: <RiMapPinLine size={55} color='#F6CB1A'/>,
        title: 'Oficina Principal',
        link: '#',
        linktext: 'Caracas, Venezuela',
        text: 'Torre Empresarial, Piso 15',
    },
    {
        id: 4,
        icon: <CiClock1 size={55} color='#F94EE8'/>,
        title: 'Horarios',
        link: '#',
        linktext: '24/7 Online',
        text: 'Oficina: Lun-Vie 8AM-6PM',
    },
]

function LinksCards() {
  return (
    <div className={classes.LinksCards_container}>
        {
            linksCardsInfo.map(card => (
                <div className={classes.Card_container}>
                    <LinksCard icon={card.icon} title={card.title} link={card.link} linktext={card.linktext} text={card.text}/>
                </div>
            ))
        }
    </div>
  )
}

export default LinksCards