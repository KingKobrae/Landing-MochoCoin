import React from 'react'
import classes from './HowWork.module.css'
import StepsCards from '../components/StepsCards'
import BlockchainCards from '../components/BlockchainCards'
import SpecsCards from '../components/SpecsCards'
import MiningCards from '../components/MiningCards'

function HowWork() {
  return (
    <section className={classes.HowWork_container}>

        <div className={classes.HowWork_title}>
            <h2>¿Cómo funciona <strong>Mochocoin?</strong></h2>
            <p>Descubre la tecnología revolucionaria detrás de Mochocoin y cómo puedes empezar a usar la criptomoneda del futuro en simples pasos.</p>
        </div>

        <article className={classes.steps}>
            <h3>Comienza en 4 Simples Pasos</h3>
            <article className={classes.stepsCards}>
                <StepsCards />
            </article>
        </article>

        <article className={classes.Blockchain}>
            <img src="./src/assets/Mining_section.jpg" alt="Mining" />
            <div className={classes.Blockchain_text}>
                
                <h3>Tecnología Blockchain Avanzada</h3>
                <p>Mochocoin utiliza la misma tecnología probada que Bitcoin, pero optimizada para las necesidades específicas del mercado venezolano.</p>

                <article className={classes.BlockchainCards}>
                    <BlockchainCards />
                </article>

            </div>
        </article>

        <section className={classes.specs}>
            <h3>Características Técnicas Detalladas</h3>
            <article className={classes.SpecsCards}>
                <SpecsCards />
            </article>
        </section>

        <section className={classes.mining}>
            <h3>Proceso de Minería y Validación</h3>

            <article className={classes.MiningCards}>
                <MiningCards />
            </article>
        </section>

    </section>
  )
}

export default HowWork