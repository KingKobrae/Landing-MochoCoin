import React from 'react'
import classes from './Contact.module.css'
import { BsSend } from "react-icons/bs";
import InputCards from '../components/InputCards';
import LinksCards from '../components/LinksCards';
import OfficesCards from '../components/OfficesCards';

function Contact() {
  return (
    <section className={classes.Contact_container} id='Contact'>

      <h2>Contáctanos</h2>
      <p>¿Tienes dudas sobre Mochocoin? Nuestro equipo está disponible 24/7 para ayudarte. Elige el canal que más te convenga.</p>

      <section className={classes.Contact_info}>

        <article className={classes.inputMessage}>

          <h3>Envíanos un Mensaje</h3>

          <InputCards />

          <div className={classes.Message}>

            <span>Mensaje *</span>
            <textarea placeholder='Describe tu problema o consulta en detalle....'></textarea>
          
          </div>

          <button className={classes.BtnSend}><BsSend size={57}/> Enviar Mensaje</button>

        </article>

        <div className={classes.Links_emergency}>

          <article className={classes.Contact_links}>
            <h3>Información de Contacto</h3>

            <LinksCards />

          </article>

          <article className={classes.Emergency_contact}>

            <h3>🚨 Soporte de Emergencia</h3>
            <p>Para problemas críticos de seguridad o transacciones perdidas</p>
            <a href="#">Contactar ahora</a>

          </article>
        </div>

      </section>

      <section className={classes.offices}>

        <h3>Nuestras Oficinas en Venezuela</h3>

        <OfficesCards />

      </section>

    </section>
  )
}

export default Contact