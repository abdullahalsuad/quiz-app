import React from 'react'
import Account from './Account'
import classes from '../styles/Nav.module.css'
import Logo from '../assets/img/logo-bg.png'

export default function Nav() {
    return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt=" Logo" />
            <h3> Quiz Application</h3>
          </a>
        </li>
      </ul>
      
      <Account />
    </nav>
    )
}
