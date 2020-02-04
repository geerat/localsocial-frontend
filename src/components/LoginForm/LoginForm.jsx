import React, {useState} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import './loginForm/LoginForm.css';
export default function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log("usename: " + username);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log("password: " + password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`username: ${username}, password: ${password}`)
        props.handleLogin(username, password);
        setPassword("");
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>

            <div className="formItem" style={{paddingTop: "1.7em"}}>   
                <Form.Item>
                    <Input prefix={<Icon type="user"/>} placeholder="Username" onChange={handleUsernameChange}/>
                </Form.Item>
            </div>
            <div className="formItem"> 
                <Form.Item>
                    <Input value={password} prefix={<Icon type="lock" />} placeholder="Password" onChange={handlePasswordChange}/>
                </Form.Item>
            </div>
            <div className="formItem"> 

                <Form.Item>
                    <div style={{paddingRight: '2em'}}>
                        <Button type="primary" htmlType="submit">Log In</Button>
                    </div>
                    <a href='/signup'>Sign Up!</a>
                </Form.Item>
            </div>

            </Form>
        </>
    )
}







LoginForm.propTypes = {
    handleLogin: PropTypes.func
}
