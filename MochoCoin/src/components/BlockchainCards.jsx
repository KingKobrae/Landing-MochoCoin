import React from 'react'
import BlockchainCard from './BlockchainCard'
import { FaNetworkWired } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import Users from './Users';
import { BsShieldCheck } from "react-icons/bs";
import classes from './BlockchainCards.module.css'
import { Grid } from '@mui/material';

const blockchainInfo = [
    {
        id: 1,
        icon: <BsCpu size={40}/>,
        title: 'Minería Eficiente',
        color: '#0E162A',
        font: '#FFF',
    },
    {
        id: 2,
        icon: <FaNetworkWired size={40}/>,
        title: 'Red Descentralizada',
        color: '#D9D9D9',
        font: '#000',
    },
    {
        id: 3,
        icon: <BsShieldCheck size={40}/>,
        title: 'Seguridad Maxima',
        color: '#D9D9D9',
        font: '#000',
    },
    {
        id: 4,
        icon: <Users size={40}/>,
        title: 'Comunidad Activa',
        color: '#0E162A',
        font: '#FFF',
    },
]

function BlockchainCards() {
  return (
        <div className={classes.BlockchainCards_container}>
            <Grid direction={'row'} container rowSpacing={4} columnSpacing={0}>
                {
                    blockchainInfo.map(card => (
                        <Grid size={5} className={classes.card_container} key={card.id} style={{backgroundColor: card.color, color: card.font}}>
                            <BlockchainCard title={card.title} icon={card.icon} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
  )
}

export default BlockchainCards