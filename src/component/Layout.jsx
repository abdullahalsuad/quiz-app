import React from 'react'
import Nav from './Nav'
import classes from '../styles/Layout.module.css'


export default function Layout({ Children }) {
    return (
        <>
          <Nav />  
          <main className={classes.main}>
              <div className={classes.container}>
                    {Children}
              </div>
          </main>
        </>
    )
}
