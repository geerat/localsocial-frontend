import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

export default function NavButtons(props) {

    const logout = () => {
        props.setAuth(false);
        props.setUsername('');
    }

    if(props.auth() === "true" && props.authBool) {
        console.log(`NAV BUTTON ${props.auth()}`);
        console.log(`NavButtons thinks username is: ${props.username()}`)
        return (
            <>
                <h3 style={{color: 'white'}}>Hello, {props.username()}!  </h3>
                <Button onClick={logout} variant="contained" color="primary">Logout</Button>
            </>
        )
    } else {
        return (
            <>
                <div style={{padding: '0.5em'}}>
                    <Button onClick={goToLogin} variant="contained" color="primary">Log In</Button>
                </div>
                <div style={{padding: '0.5em'}}>
                    <Button onClick={goToSignUp} variant="contained" color="primary">Sign Up</Button>
                </div>
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
    auth: PropTypes.func,
    username: PropTypes.func,
    setUsername: PropTypes.func,
    setAuth: PropTypes.func,
    authBool: PropTypes.bool
}
