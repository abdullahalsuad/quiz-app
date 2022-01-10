import React from 'react'
import classes from '../styles/Illustration.module.css'
import Signupimg from '../assets/img/login.svg'
export default function Illustration() {
    return (
        <div className={classes.illustration}>
            <img src={Signupimg} alt="Signup" />
        </div>
    )
}
