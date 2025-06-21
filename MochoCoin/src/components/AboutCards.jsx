import React from 'react'
import { IoShieldOutline } from "react-icons/io5";
import { TbApiApp } from "react-icons/tb";
import { IoTrendingUpOutline } from "react-icons/io5";
import AboutCard from './AboutCard.jsx'
import classes from './AboutCards.module.css'

const infoCard = [
    {
        id: 1,
        title: 'Estabilidad de Valor',
        icon: <IoShieldOutline size='58px'/>,
        text: 'Protección contra la inflación y volatilidad económica.',
    },
    {
        id: 2,
        title: 'Accesibilidad Total',
        icon: <TbApiApp size='58px'/>,
        text: 'Sin restricciones bancarias ni limitaciones de horario.',
    },
    {
        id: 3,
        title: 'Potencial de Crecimiento',
        icon: <IoTrendingUpOutline size='58px'/>,
        text: 'Opotunidad de generar rendimientos a largo plazo.',
    }
]

function AboutCards() {
  return (

    <section className={classes.container}>

        {
            infoCard.map(info => (
                <div key={info.id} >
                    <AboutCard title={info.title} icon={info.icon} text={info.text}/>
                </div>
            ))
        }
    </section>

  )
}

export default AboutCards