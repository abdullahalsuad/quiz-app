import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/Account.module.css'

export default function Account() {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
            account_circle
            </span>
            <NavLink to='/signup'><b style={{color:"red"}}>Signup</b></NavLink>
               <b>||</b> 
            <NavLink to='/login'><b style={{color:"red"}}>Login</b></NavLink>
         {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
    )
}
