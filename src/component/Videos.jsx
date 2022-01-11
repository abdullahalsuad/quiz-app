import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/Videos.module.css'
import Video from './Video'

export default function Videos() {
    return (
        <div className={classes.videos}>
          <NavLink to='/quiz'><Video /></NavLink>
          <NavLink to='/quiz'><Video /></NavLink>
          <NavLink to='/quiz'><Video /></NavLink>
          <NavLink to='/quiz'><Video /></NavLink>
          <NavLink to='/quiz'><Video /></NavLink>
          
            
        </div>
    )
}
