import React from 'react'
import MoreInfoCard from './MoreInfoCard'
import classes from './FactorsCards.module.css'
import { IoIosTrendingUp } from "react-icons/io";

const factorsCardsInfo = [
    {
        id: 1,
        icon: <IoIosTrendingUp size={40}/>,
        text: 'Adopción creciente de comercios venezolanos',
    },
    {
        id: 2,
        icon: <IoIosTrendingUp size={40}/>,
        text: 'Inflación del bolívar impulsa demanda de alternativas',
    },
    {
        id: 3,
        icon: <IoIosTrendingUp size={40}/>,
        text: 'Crecimiento de usuarios activos del 45% mensual',
    },
    {
        id: 4,
        icon: <IoIosTrendingUp size={40}/>,
        text: 'Partnerships con exchanges regionales',
    },
]

function FactorsCards() {
  return (
    <article className={classes.FactorsCards_container}>
        {
            factorsCardsInfo.map(card => (
                <div className={classes.Card_container} key={card.id}>
                    <MoreInfoCard icon={card.icon} text={card.text}/>
                </div>
            ))
        }
    </article>
  )
}

export default FactorsCards