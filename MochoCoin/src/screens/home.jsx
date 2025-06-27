import React from 'react'
import classes from './././home.module.css'
import HomeCards from '../components/HomeCards'
import ButtonLink from '../components/ButtonLink'

const HomeInfo = [
    {
        id: 1,
        text: 'Comenzar Ahora',
        link: '#',
        bg: 'linear-gradient(90deg,#3b82f6 30%, #1e41b1 83%)',
        font: '#FFF',
        border: '#14265C',
    },
    {
        id: 2,
        text: 'Aprender Más',
        link: '#',
        bg: 'transparent',
        font: '#F6CB1A',
    },
]

function Home() {
  return (
        <>
            <div className={classes.container} id='home'>
                <section className={classes.firstSection}>
                    <article className={classes.title_container}>
                        <h1>Mochocoin</h1>
                        <h2>La Criptomoneda del futuro de Venezuela</h2>
                        <p>
                         Revoluciona tu economía personal con la primera criptomoneda diseñada específicamente para el mercado venezolano. Segura, rápida y libre de las limitaciones del sistema bancario tradicional.
                        </p>
                    </article>
                    <img src="./src/assets/MochoLogo.svg" alt="MochoCoin Logo" />
                </section>

      
                <HomeCards />
           

                <div className={classes.btn_container}>
                    {
                        HomeInfo.map(btn => (
                            <div key={btn.id} className={classes.btn_box} >
                                <ButtonLink text={btn.text} link={btn.link} textColor={btn.font} bg={btn.bg} bColor={btn.border}/>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Home