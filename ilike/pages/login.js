import React from 'preact/compat'
import LoginPage from '@loginpage/login-page'

export default function Login({ providers }) {
    return (
        <LoginPage providers = {providers} />
    )
}