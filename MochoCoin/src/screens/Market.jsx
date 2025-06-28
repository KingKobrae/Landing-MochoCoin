import React from 'react'
import classes from './Market.module.css'
import { IoIosTrendingUp } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { LuChartColumn } from "react-icons/lu";
import { TiWarning } from "react-icons/ti";
import ChartButtons from '../components/ChartButtons';
import StatsCards from '../components/StatsCards';
import HistorialCards from '../components/HistorialCards';
import LevelsCards from '../components/LevelsCards';
import FactorsCards from '../components/FactorsCards';
import ProjectionsCards from '../components/ProjectionsCards';


function Market() {
  return (
    <section className={classes.Market_container} id='Market'>

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
                    <IoIosTrendingUp size={40}/>
                    <span>+ 1.70%</span>
                </div>

                <div className={classes.btn_container}>
                    <ChartButtons />
                </div>

            </article>

            <img src="./src/assets/Chart.png" className={classes.Chart_img} alt="Si lees esto significa que algo cargó mal" />

        </section>

        <article className={classes.StatsCards}>
            <StatsCards />
        </article>

        <section className={classes.Interesting_info}>

            <section className={classes.Historical_performance}>

                <div className={classes.Historical_performance_title}>
                    <CiCalendar size={77}/>
                    <h3>Rendimiento Histórico</h3>
                </div>
                
                <article className={classes.HistorialCards}>
                    <HistorialCards />
                </article>
            </section>

            <section className={classes.Levels}>

                <div className={classes.Levels_title}>
                    <LuChartColumn size={77}/>
                    <h3>Niveles Técnicos</h3>
                </div>

                <article className={classes.LevelsCards}>
                    <LevelsCards />
                </article>
            </section>

        </section>

        <section className={classes.Analysis}>
            <h3>Análisis de Mercado Venezolano</h3>

            <div className={classes.More_info}>

                <article className={classes.Factors}>
                    <h3>Factores Positivos</h3>

                    <article className={classes.FactorsCards}>
                        <FactorsCards />
                    </article>
                    
                </article>

                <article className={classes.Projections}>
                    <h3>Proyecciones 2025</h3>

                    <article className={classes.ProjectionsCards}>
                        <ProjectionsCards />
                    </article>

                </article>

            </div>

            <section className={classes.Warning}>

                <div className={classes.Warning_title}>
                    <TiWarning size={45.8}/>
                    <h3>Aviso Legal</h3>
                </div>

                <p>Las proyecciones y análisis presentados son para fines educativos y de proyecto académico. Los precios de criptomonedas son volátiles y pueden fluctuar significativamente. Esta información no constituye asesoramiento financiero. Consulte con un profesional antes de tomar decisiones de inversión.</p>
            </section>
        </section>

    </section>
  )
}

export default Market