import React from 'react'
import classes from './FAQ.module.css'
import { AiOutlineFileUnknown } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import FlashPayment from '../components/FlashPayment';
import BasicsCards from '../components/BasicsCards';
import SecurityCards from '../components/SecurityCards';
import TransactionsCards from '../components/TransactionsCards';
import UsageCards from '../components/UsageCards';
import InvestmentCards from '../components/InvestmentCards';
import SupportButtons from '../components/SupportButtons';
import Trusted_SourcesCards from '../components/Trusted_SourcesCards';

function FAQ() {
  return (
    <section className={classes.FAQ_container} id='FAQ'>
        <h2>Preguntas <strong>Frecuentes</strong></h2>

        <section className={classes.Basics}>

            <div className={classes.Basics_title}>

                <AiOutlineFileUnknown size={42}/>
                <h3>Aspectos Básicos</h3>

            </div>

            <article className={classes.BasicsCards}>
                <BasicsCards />
            </article>

        </section>

        <section className={classes.Security}>

            <div className={classes.Security_title}>

                <BsShieldCheck size={42}/>
                <h3>Seguridad</h3>

            </div>

            <article className={classes.SecurityCards}>
                <SecurityCards />
            </article>

        </section>

        <section className={classes.Transactions}>

            <div className={classes.Transactions_title}>

                <FiDollarSign size={42}/>
                <h3>Transacciones y Costos</h3>

            </div>

            <article className={classes.TransactionsCards}>
                <TransactionsCards />
            </article>

        </section>

        <section className={classes.Usage}>

            <div className={classes.Usage_title}>

                <GoPeople size={42}/>
                <h3>Uso y Adopción</h3>

            </div>

            <article className={classes.UsageCards}>
                <UsageCards />
            </article>

        </section>

        <section className={classes.Investment}>

            <div className={classes.Investment_title}>

                <FlashPayment />
                <h3>Inversión y Rendimientos</h3>

            </div>

            <article className={classes.InvestmentCards}>
                <InvestmentCards />
            </article>

        </section>

        <section className={classes.Support}>

            <h3>¿No encontraste la respuesta que buscabas?</h3>
            <p>Nuestro equipo de soporte está disponible 24/7 para ayudarte</p>

            <article className={classes.SupportButtons}>
                <SupportButtons />
            </article>

        </section>

        <article className={classes.Trusted_SourcesCards}>
            <Trusted_SourcesCards />
        </article>

        
    </section>
  )
}

export default FAQ