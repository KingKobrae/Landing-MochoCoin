import React from 'react'
import classes from './AboutUs.module.css'
import AboutCards from '../components/AboutCards'
import ProCards from '../components/ProCards'
import TechnicalCards from '../components/TechnicalCards'

function AboutUs() {
  return (
    <section className={classes.container}>
      <article className={classes.title_container}>

        <h2>¿Qué es <strong>Mochocoin?</strong></h2>
        <p>Mochocoin es la primera criptomoneda diseñada específicamente para el mercado venezolano, ofreciendo una alternativa segura, estable y rentable al bolívar y al dólar americano.</p>


      </article>

      <article className={classes.Summary}>

        <img src="./src/assets/Venezuela-crypto.png" className={classes.venecoin} alt="Si estás leyendo esto algo malo sucedió" />

        <div className={classes.context_container}>

          <div className={classes.context}>

            <img src="./src/assets/Funds.svg" alt="" />
            <h2>La Solución Financiera que Venezuela Necesita. <img src="./src/assets/Paper-money-two.svg" alt="" /></h2>

          </div>

          <p>En un país donde la inflación ha devaluado la moneda local y el acceso al dólar está limitado, Mochocoin emerge como la alternativa digital que combina:</p>

          <div className={classes.AboutCards}>
            <AboutCards />
          </div>

        </div>

      </article>

      <section className={classes.Pros}>
        <ProCards />
      </section>

      <section className={classes.Technical}>
        <h2>Especificaciones Técnicas</h2>
        <TechnicalCards />  
      </section>

    </section>
  )
}

export default AboutUs