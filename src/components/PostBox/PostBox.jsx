import React, { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core';

export default function PostBox(props) {

    const [post, setPost] = useState();

    const handleChange = (e) => {
        setPost(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handlePost(post);
        setPost('');
    }

    return (
        
            <Card>
                <div style={{width: "100vw", position: "fixed", bottom: "0", height: '15vh' }}>
                    <Form onSubmit={handleSubmit} >
                        <div style={{paddingLeft: "2em", paddingRight: '2em', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                            


                            <div style={{paddingRight: '2em'}}>
                                <Avatar style={{ backgroundColor: '#9C4532', verticalAlign: 'middle'}} size="large">
                                    {props.username().charAt(0).toUpperCase()}
                                </Avatar>
                            </div>

                            <div style={{width: '60vw'}}>
                                <Form.Item>
                                    <Input placeholder="Write a post!" value={post} onChange={handleChange} />
                                </Form.Item>
                            </div>


                            <div style={{paddingLeft: "2em", paddingRight: '2em'}}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Post</Button>
                                </Form.Item>
                            </div>
                            
                        </div>
                    </Form>
                    </div>
            </Card>

    )
}

PostBox.propTypes = {
    handlePost: PropTypes.func,
    username: PropTypes.func
}