import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types'

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
        <>
            <Form onSubmit={handleSubmit} >

                <Form.Item>
                    <Input placeholder="Write a post!" value={post} onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Post</Button>
                </Form.Item>
            
            </Form>
        </>
    )
}

PostBox.propTypes = {
    handlePost: PropTypes.func
}