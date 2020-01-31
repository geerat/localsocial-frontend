import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
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
        <div style={{width: "100vw", position: "fixed", bottom: "0", height: '20vh' }}>
            <Card>
                <div style={{height: '25vh'}} >
                    <div style={{paddingLeft: "2em", paddingRight: '2em', paddingTop: '1em', paddingBottom: '1em' }}>
                        <Typography color="textSecondary" >
                        Write a post!
                        </Typography>
                    </div>
                    <Form onSubmit={handleSubmit} >
                        <div style={{paddingLeft: "2em", paddingRight: '2em'}}>
                            <Form.Item>
                                <Input placeholder="Write a post!" value={post} onChange={handleChange} />
                            </Form.Item>
                        </div>
                        <div style={{paddingLeft: "2em", paddingRight: '2em'}}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Post</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
}

PostBox.propTypes = {
    handlePost: PropTypes.func
}