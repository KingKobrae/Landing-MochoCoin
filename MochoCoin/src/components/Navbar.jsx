import React from 'react'
import classes from '././Navbar.module.css'
import ButtonLink from './ButtonLink';

const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}

const buttonLinkInfo = [
    {
        id: 1,
        text: 'Comenzar Ahora',
        link: '#',
    },
]

function Navbar() {
  return (
    <>
    <nav>
    
        <div className={classes.logo}>
            <img src="./src/assets/MochoLogo.svg" alt="MochoCoin Logo" />
            <span>Mochocoin</span>
        </div>

        <div className={classes.links}>


            <ul>
                <li>
                    <a href="#home" onClick={(e)=> handleScroll(e, "home")}>Inicio</a>
                </li>
                <li>
                    <a href="#AboutUs" onClick={(e)=> handleScroll(e, "AboutUs")}>¿Qué es Mochocoin?</a>
                </li>
                <li>
                    <a href="#HowWork" onClick={(e)=> handleScroll(e, "HowWork")}>Cómo funciona</a>
                </li>
                <li>
                    <a href="#Market" onClick={(e)=> handleScroll(e, "Market")}>Mercado</a>
                </li>
                <li>
                    <a href="#FAQ" onClick={(e)=> handleScroll(e, "FAQ")}>FAQ</a>
                </li>
                <li>
                    <a href="#Blog" onClick={(e)=> handleScroll(e, "Blog")}>Blog</a>
                </li>
                <li>
                    <a href="#Contact" onClick={(e)=> handleScroll(e, "Contact")}>Contacto</a>
                </li>
            </ul>

            {
            buttonLinkInfo.map(btn => (
                    <div key={btn.id} className={classes.btn__navbar}>
                        <ButtonLink text={btn.text} link={btn.link} />
                    </div>
                ))
            }

        </div>
    </nav>
    </>
  )
}

export default Navbar