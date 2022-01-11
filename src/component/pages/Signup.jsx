import React from 'react'
import Form from '../Form'
import Illustration from '../Illustration'
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'
import Button from '../Button'

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
            <Illustration />
                <Form className={`${classes.signup}`}>

                    <TextInput type="text" placeholder="Enter name" icon="person" />

                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />

                     <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button text="Submit Now"/>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>   
            </div>
        </>
    )
}
