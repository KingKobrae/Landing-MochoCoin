import React from 'react'
import SocialsCard from './SocialsCard'
import classes from './SocialsCards.module.css'
import { RiTelegram2Fill } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiTiktokLogoLight } from "react-icons/pi";

const socialsCardsInfo = [
    {
        id: 1,
        logo: <RiTelegram2Fill size={55}/>,
    },
    {
        id: 2,
        logo: <LuFacebook size={55}/>,
    },
    {
        id: 3,
        logo: <PiInstagramLogoLight size={55}/>,
    },
    {
        id: 4,
        logo: <PiTiktokLogoLight size={55}/>,
    },
]

function SocialsCards() {
  return (
    <div className={classes.SocialsCards_container}>
        {
            socialsCardsInfo.map(card => (
                <div className={classes.Icon_container} key={card.id}>
                    <SocialsCard logo={card.logo}/>
                </div>
            ))
        }
    </div>
  )
}

export default SocialsCards