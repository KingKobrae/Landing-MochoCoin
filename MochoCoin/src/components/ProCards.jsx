import React from 'react'
import DollarSymbol from './DollarSymbol'
import { IoTrendingUpOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import Community from './Community'
import { TbShield } from "react-icons/tb";
import { HiOutlineBolt } from "react-icons/hi2";
import ProCard from './ProCard';
import { Grid } from '@mui/material';

const info = [
    {
        id: 1,
        title: 'Estabilidad Frente al Bolívar',
        text: 'Protege tu dinero de la inflación y devaluación con una moneda digital estable respaldada por tecnología blockchain.',
        icon: <DollarSymbol />,
    },
    {
        id: 2,
        title: 'Crecimiento de Valor',
        text: 'A diferencia del dólar físico, Mochocoin tiene potencial de crecimiento y genera rendimientos para sus tenedores.',
        icon: <IoTrendingUpOutline size={'79px'} color='#4490EA' />,
    },
    {
        id: 3,
        title: 'Transacciones Internacionales',
        text: 'Envía y recibe dinero a cualquier parte del mundo sin restricciones bancarias ni comisiones excesivas.',
        icon: <TfiWorld size={'79px'} color='#5BF02D' />,
    },
    {
        id: 4,
        title: 'Comunidad Venezolana',
        text: 'Diseñada específicamente para las necesidades del mercado venezolano y su economía digital emergente.',
        icon: <Community />,
    },
    {
        id: 5,
        title: 'Seguridad Total',
        text: 'Tu dinero está protegido por criptografía avanzada, sin riesgo de confiscación o congelamiento de cuentas.',
        icon: <TbShield size={'79px'} color='#F37474' strokeWidth={'0.7px'}/>,
    },
    {
        id: 6,
        title: 'Transacciones Instantáneas',
        text: 'Transfiere dinero en segundos, sin esperar días hábiles ni horarios bancarios limitados.',
        icon: <HiOutlineBolt size={'79px'} color='#FFCD00' strokeWidth={'0.7px'}/>,
    }
]

function ProCards() {
  return (
    <section>
        <Grid direction='row' container rowSpacing={6} columnSpacing={9}>
            {
                info.map(card => (
                    <Grid size={4} key={card.id}>
                        <ProCard title={card.title} icon={card.icon} text={card.text}/>
                    </Grid>
                ))
            }
        </Grid>
    </section>
  )
}

export default ProCards