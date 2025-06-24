import React from 'react'
import classes from './StepsCards.module.css'
import StepsCard from './StepsCard'
import Wallet from './Wallet';
import { CiCircleCheck } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa";
import { Grid } from '@mui/material';

const stepsCardData = [
    {
        id: 1,
        number: '01',
        icon: <Wallet />,
        title: 'Creacion de Wallet',
        text: 'Descarga la aplicación Mochocoin y crea tu wallet digital seguro con criptografía de nivel militar.',
    },
    {
        id: 2,
        number: '02',
        icon: <CiCircleCheck fill='#FFF' size={40}/>,
        title: 'Verificación de Identidad',
        text: 'Verifica tu identidad con tu cédula venezolana para cumplir con regulaciones locales.',
    },
    {
        id: 3,
        number: '03',
        icon: <LuDollarSign stroke='#FFF' size={40}/>,
        title: 'Compra de MCS',
        text: 'Adquiere tus primeros Mochocoins usando bolívares, dólares o transferencias bancarias.',
    },
    {
        id: 4,
        number: '04',
        icon: <FaNetworkWired fill='#FFF' size={40}/>,
        title: 'Transacciones Seguras',
        text: 'Envía, recibe y almacena Mochocoins con transacciones validadas por la red blockchain.',
    }
]

function StepsCards() {
  return (
    <div className={classes.StepsCards_container}>
        <Grid direction={'row'} container>
            {
                stepsCardData.map(card => (
                    <Grid size={2.8} className={classes.card_container} key={card.id}>
                        <StepsCard title={card.title} text={card.text} icon={card.icon} number={card.number} />
                    </Grid>
                ))
            }
        </Grid>
    </div>
  )
}

export default StepsCards