import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'

export default function LoginPageContainer(props) {

    const history = useHistory();

    async function login(username, password) {
    
        const response = await fetch("http://10.10.0.49:8080/api/login",
        {
            method: 'POST',
            //mode:'no-cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : username,
                "password": password
            })
        });
    
        const body = await response.json();

        if(body.key === "success") {
            props.setUsername(username);
            props.setAuth(true);
            history.push('/home');

        } else {
            props.setAuth(false);
        }


    }




    return (
        <>
            <div style={{display: 'flex', flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <div style={{}}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" componenet="h2">
                                Login below!
                            </Typography>
                        </CardContent>
                        <LoginForm handleLogin={login}/>

                    </Card>
                </div>
            </div>
        </>
    )
}




LoginPageContainer.propTypes = {
    setAuth: PropTypes.func,
    setUsername: PropTypes.func
}