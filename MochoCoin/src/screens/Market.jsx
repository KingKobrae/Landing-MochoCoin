import React from 'react'
import classes from './Market.module.css'
import { IoIosTrendingUp } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { LuChartColumn } from "react-icons/lu";
import { TiWarning } from "react-icons/ti";

function Market() {
  return (
    <section className={classes.Market_container}>

        <div className={classes.title_container}>
            <h2>Mercado <strong>Mochocoin</strong></h2>
            <p>Mantente actualizado con el precio en tiempo real, análisis de mercado y proyecciones de Mochocoin en el ecosistema venezolano.</p>
        </div>

        <section className={classes.Chart_container}>

            <article className={classes.Cost}>

                <div className={classes.Chart_title}>
                    <img src="./src/assets/MochoLogo.svg" alt="MochoLogo" />

                    <div className={classes.Chart_title_text}>
                        <h3><strong>Mochocoin</strong> (MCO)</h3>
                        <p>En tiempo real</p>
                    </div>

                </div>

                <span className={classes.data1}>$ 0.70</span>
                <div className={classes.data2}>
                    <IoIosTrendingUp />
                    <span>+ 1.70%</span>
                </div>

                <div className={classes.btn_container}>
                    {/* button */}
                </div>

            </article>

            <img src="./src/assets/Chart.png" alt="Si lees esto significa que algo cargó mal" />

        </section>

        <article>
            {/* Cards */}
        </article>

        <section className={classes.Interesting_info}>

            <section className={classes.Historical_performance}>
                <CiCalendar />
                <h3>Rendimiento Histórico</h3>
                <article>
                    {/* Cards */}
                </article>
            </section>

            <section className={classes.Levels}>
                <LuChartColumn />
                <h3>Niveles Técnicos</h3>
                <article>
                    {/* Cards */}
                </article>
            </section>

        </section>

        <section className={classes.Analysis}>
            <h3>Análisis de Mercado Venezolano</h3>

            <div className={classes.More_info}>

                <article className={classes.Factors}>
                    <h3>Factores Positivos</h3>

                    <article>
                        {/* Cards */}
                    </article>
                    
                </article>

                <article className={classes.Projections}>
                    <h3>Proyecciones 2025</h3>

                    <article>
                        {/* Cards */}
                    </article>

                </article>

            </div>

            <section className={classes.Warning}>

                <div className={classes.Warning_title}>
                    <TiWarning />
                    <h3>Aviso Legal</h3>
                </div>
            </section>
        </section>

    </section>
  )
}

export default Market