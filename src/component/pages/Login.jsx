import React from 'react'
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../IllustrationLog";
import TextInput from "../TextInput";
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <>
        <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.login}`}>

                  <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>

                  <TextInput type="password" placeholder="Enter password" icon="lock" />

                  <Button>Submit Now</Button>

                  <div className="info">
                    Don't have an account? <NavLink to='/signup' style={{color:"red"}}>Signup</NavLink>
                  </div>

                </Form>
            </div>
        </>
    )
}
