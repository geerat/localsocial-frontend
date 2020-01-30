import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

export default function NavButtons(props) {


    if(props.auth) {
        return (
            <>
                <h1>Hello, {props.username}</h1>
            </>
        )
    } else {
        return (
            <>
                <Button onClick={goToLogin}>Log In</Button>
                <Button onClick={goToSignUp}>Sign Up</Button>
            </>
        )
    }

    
}

function goToLogin() {
    window.location.href = "/login";
}

function goToSignUp() {
    window.location.href = "/signup";
}

NavButtons.propTypes = {
    auth: PropTypes.bool,
    username: PropTypes.string
}
