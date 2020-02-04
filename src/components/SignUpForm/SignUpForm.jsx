import React, {useState} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import '../LoginForm/loginForm/LoginForm.css';
export default function SignUpForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSignUp(username, password);
        setPassword("");
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit} >
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
                        <Button type="primary" htmlType="submit">Sign Up</Button>
                    </div>
                    <a href='/login'>Already have an account? Log in!</a>
                </Form.Item>
            </div>

            </Form>
        </>
    )
}

SignUpForm.propTypes = {
    handleSignUp: PropTypes.func
}
