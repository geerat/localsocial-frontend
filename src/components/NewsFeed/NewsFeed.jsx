import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import NewsFeedItem from '../NewsFeedItem/NewsFeedItem'
import PostBox from '../PostBox/PostBox'
import { Button } from '@material-ui/core'
import {useHistory} from 'react-router-dom';



export default function NewsFeed(props) {


    const history = useHistory();

    useEffect(() => {
      /* if(props.auth) {
           props.getPosts();
       } */
    })

    const messages = props.posts.map((post) => {
        return <NewsFeedItem message={post.message} username={post.username} timestamp={post.timestamp} />
    })

    const login = () => {
        history.push('/login');
    }

    const content = () => {
        if(props.auth) {
            return (
                <>
                    <PostBox handlePost={props.handlePost} />
                    {messages}
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
    handlePost: PropTypes.func
}
