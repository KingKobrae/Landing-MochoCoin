import React from 'react'
import StatsCard from './StatsCard'
import classes from './StatsCards.module.css'
import { AiOutlineBarChart } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";

const statsCardsInfo = [
    {
        id: 1,
        icon: <AiOutlineBarChart size={30} color='#63A6F5'/>,
        number: '+8.7%',
        title: 'Capitalización de Mercado',
        data: '$ 51.45  M ',
    },
    {
        id: 2,
        icon: <CiClock2 size={30} color='#41E264'/>,
        number: '+15.7%',
        title: 'Volumen 24h',
        data: '$ 2.8  M ',
    },
    {
        id: 3,
        icon: <FiDollarSign size={30} color='#F6CB1A'/>,
        number: '+86.7% del total',
        title: 'Suministro Circulante',
        data: '$ 18.2  MCO ',
    },
]

function StatsCards() {
  return (
    <article className={classes.StatsCards_container}>
        {
            statsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <StatsCard  title={card.title} number={card.number} icon={card.icon} data={card.data}/>
                </div>
            ))
        }
    </article>
  )
}

export default StatsCards