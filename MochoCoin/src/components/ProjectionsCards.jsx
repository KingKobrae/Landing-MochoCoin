import React from 'react'
import MoreInfoCard from './MoreInfoCard'
import classes from './ProjectionsCards.module.css'
import { LuChartColumn } from "react-icons/lu";

const projectionsCardsInfo = [
    {
        id: 1,
        icon: <LuChartColumn size={40}/>,
        text: 'Objetivo de precio: $5.00 - $8.00',
    },
    {
        id: 2,
        icon: <LuChartColumn size={40}/>,
        text: '100,000+ usuarios activos esperados',
    },
    {
        id: 3,
        icon: <LuChartColumn size={40}/>,
        text: 'Integración con bancos venezolanos',
    },
    {
        id: 4,
        icon: <LuChartColumn size={40}/>,
        text: 'Expansión a mercados latinoamericanos',
    },
]

function ProjectionsCards() {
  return (
    <article className={classes.ProjectionsCards_container}>
        {
            projectionsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <MoreInfoCard icon={card.icon} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default ProjectionsCards