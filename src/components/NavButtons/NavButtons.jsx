import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

export default function NavButtons(props) {

    const logout = () => {
        props.setAuth(false);
        props.setUsername('');
    }

    if(props.auth() === "true" && props.authBool) {

        return (
            <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', textAlign: 'center'}}>
                
                <div style={{paddingRight: '2em'}}>
                    <h3 style={{color: 'white'}}>Hello, {props.username()}!</h3>
                </div>

                <div>
                    <Button onClick={logout} variant="contained" color="primary">Logout</Button>
                </div>

            </div>
        )
    } else {
        return (
            <>
                <div style={{padding: '0.5em'}}>
                    <Button onClick={goToLogin} variant="contained" color="primary"><p>Log In</p></Button>
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
