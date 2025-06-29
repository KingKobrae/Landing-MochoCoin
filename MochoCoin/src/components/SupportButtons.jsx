import React from 'react'
import ButtonLink from './ButtonLink.jsx'
import classes from './SupportButtons.module.css'

const supportButtonsInfo = [
    {
        id: 1,
        link: '#',
        text: 'Chat en vivo',
        color: '#FFF',
    },
    {
        id: 2,
        link: '#',
        text: 'Enviar email',
        color: '#FFF',
    },
    {
        id: 3,
        link: '#',
        text: 'WhatsApp',
        color: '#FFF',
    },
]

function SupportButtons() {
  return (
    <div className={classes.SupportButtons_container}>
        {
            supportButtonsInfo.map(card => (
                <div className={classes.Button_container} key={card.id}>
                    <ButtonLink link={card.link} text={card.text} textColor={card.color}/>
                </div>
            ))
        }
    </div>
  )
}

export default SupportButtons