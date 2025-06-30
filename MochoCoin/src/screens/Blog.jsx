import React from 'react'
import classes from './Blog.module.css'
import { CiCalendar } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import BlogCards from '../components/BlogCards';
import SocialsCards from '../components/SocialsCards';

function Blog() {
  return (
    <section className={classes.Blog_container} id='Blog'>

      <h2>Blog y <strong>Noticias</strong></h2>
      <p>Mantente actualizado con las últimas noticias, análisis de mercado y guías educativas sobre Mochocoin y el ecosistema de criptomonedas en Venezuela.</p>

      <section className={classes.News_container}>

        <article className={classes.News_chart}>
          
          <span>Destacado</span>

        </article>

        <article className={classes.News_info}>
          
          <div className={classes.News_info_date}>
            <span className={classes.News_info_date_text}>Noticias</span>
            <span><CiCalendar size={35}/> 3/6/2025</span>
            <span><RxPerson size={35}/> 3min</span>
          </div>

          <h3 className={classes.spacingH3_1}>Mochocoin Alcanza Nuevo Récord Histórico</h3>
          <h3 className={classes.spacingH3_2}>de $2.80 USD</h3>
          <p>La criptomoneda venezolana rompe barreras y establece un nuevo máximo histórico impulsada por la creciente adopción en comercios locales.</p>

          <div className={classes.News_info_ButtonText}>
            <span>Por Equipo Mochocoin</span>
            <a href="#">Leer Más <HiOutlineArrowNarrowRight size={30}/></a>
          </div>

        </article>

      </section>

        <article className={classes.BlogCards}>
          <BlogCards />
        </article>

        <section className={classes.Newsletter}>

          <h3>Mantente <strong>Informado</strong></h3>
          <p>Suscríbete a nuestro newsletter y recibe las últimas noticias de Mochocoin, análisis de mercado y guías educativas directamente en tu email.</p>

          <div className={classes.Newsletter_email}>

            <input type="text" placeholder='tu-nombre@tu-email.com'/>
            <button>Enviar</button>

          </div>

        </section>

        <section className={classes.Socials}>

          <h3>Síguenos en redes sociales</h3>

          <SocialsCards />
          
        </section>

    </section>
  )
}

export default Blog