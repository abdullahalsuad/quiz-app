import React from 'react'
import Account from './Account'
import classes from '../styles/Nav.module.css'
import Logo from '../assets/img/logo-bg.png'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/"   className={classes.brand}>
            <img src={Logo} alt=" Logo" />
            <h3> Quiz Application</h3>
          </NavLink>
        </li>
      </ul>
      
      <Account />
    </nav>
    )
}
