import React from 'react'
import classes from '../styles/Illustration.module.css'
import Loginimg from '../assets/img/login.svg'

export default function IllustrationLog() {
    return (
        <div className={classes.illustration}>
            <img src={Loginimg} alt="Signup" />
        </div>
    )
}
