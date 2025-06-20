import React from 'react'
import classes from './././home.module.css'
import HomeCards from '../components/HomeCards'

function Home() {
  return (
        <>
            <div className={classes.container}>
                <section className={classes.firstSection}>
                    <article>
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
                    <a href="#" className={classes.btn_begin}>Comenzar Ahora</a>
                    <a href="#" className={classes.btn_learn}>Aprender Más</a>
                </div>
            </div>
        </>
    )
}

export default Home