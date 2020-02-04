import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PostBox from '../PostBox/PostBox';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import AntPost from '../AntPost/AntPost';

export default function NewsFeed(props) {


    const history = useHistory();

    useEffect(() => {
      /* if(props.auth) {
           props.getPosts();
       } */
    })

    const messages = props.posts.map((post) => {
        return (
                <AntPost likeState={post.likeStatus} refreshPosts={props.refreshPosts} likeCount={post.likeCount} messageId={post.postId} message={post.message} currentUsername={props.username} username={post.username} likes={post.likes} timestamp={post.timestamp} />
        )

    })

    const login = () => {
        history.push('/login');
    }

    const content = () => {
        if(props.auth) {
            return (
                <>
                    <PostBox handlePost={props.handlePost} username={props.username}/>

                    <div style={{display:'flex', flexFlow: "column nowrap", justifyContent: "flex-start", alignItems: 'center', overflow: 'scroll', height: '75vh'}}>
                            {messages}
                            <Button onClick={props.getMorePosts}>More posts</Button>
                    </div>
                    
                </>
            )
        } else {
            return (
                <>
                    <h1>Not logged in!</h1>
                    <Button onClick={login}>Click to login!</Button>
                </>
            )
        }
    }

    return (
        <>
            {content()}
        </>
    )
    
}

NewsFeed.propTypes = {
    getPosts: PropTypes.func,
    posts: PropTypes.array,
    auth: PropTypes.bool,
    handlePost: PropTypes.func,
    getMorePosts: PropTypes.func,
    username: PropTypes.func,
    refreshPosts: PropTypes.func
}
