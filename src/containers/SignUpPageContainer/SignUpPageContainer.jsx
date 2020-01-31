import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import { notification, Icon } from 'antd'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPageContainer(props) {

    const history = useHistory();


    if(props.auth() === "true") {
        history.push('/home')
    }

    async function signUp(username, password) {
    
        const response = await fetch("http://10.10.0.49:8080/api/users",
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
            
            notification.open({
                message: `Welcome, ${body.username}!`,
                description: 'You can now login to make and view posts!', 
                icon: <Icon type="user-add" />
            });
            history.push('/login');

        } else if(body.key === "username-taken") {
            notification.open({
                message: `Sorry, username ${body.username} has been taken!`,
                description: 'Please try a different username!', 
                icon: <Icon type="warning" />
            });

        } else {
            notification.open({
                message: `Sorry, there's an error`,
                description: 'We were unable to sign you up!', 
                icon: <Icon type="warning" />
            });
        }


    }




    return (
        <>
            <div style={{display: 'flex', flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <div style={{}}>
                    <Card>

                    <CardContent>
                            <Typography variant="h5" componenet="h2">
                                Sign up below!
                            </Typography>
                        </CardContent>

                        <SignUpForm handleSignUp={signUp} />
                    </Card>
                </div>
            </div>
        </>
    )
}




SignUpPageContainer.propTypes = {
    auth: PropTypes.func
}