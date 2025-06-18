import React from 'react'
import classes from '././Navbar.module.css'

function Navbar() {
  return (
    <>
    <nav>
    
        <div className={classes.logo}>
            <img src="./src/assets/MochoLogo.svg" alt="MochoCoin Logo" />
            <span>Mochocoin</span>
        </div>

        <ul>
            <li>
                <a href="index.html">Inicio</a>
            </li>
            <li>
                <a href="#">¿Qué es Mochocoin?</a>
            </li>
            <li>
                <a href="#">Cómo funciona</a>
            </li>
            <li>
                <a href="#">Mercado</a>
            </li>
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>

        <a href="#" className={classes.btn__navbar}>Comenzar Ahora</a>

    </nav>
    </>
  )
}

export default Navbar