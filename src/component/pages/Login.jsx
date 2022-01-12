import React from 'react'
import Illustration from "../IllustrationLog";
import LoginForm from '../LoginForm';

export default function Login() {
    return (
        <>
        <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <LoginForm />
            </div>
        </>
    )
}
