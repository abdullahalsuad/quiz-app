import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/Account.module.css'

export default function Account() {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
            account_circle
            </span>
            <NavLink to='/signup' ><button>Signup</button></NavLink>
            <NavLink to='/login' ><button>Login</button></NavLink>
         {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
    )
}
