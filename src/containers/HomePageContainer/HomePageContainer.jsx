import React, { useState, useEffect } from 'react'
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
export default function HomePageContainer(props) {


    const [posts, setPosts] = useState([]);
    const [postStatus, setPostStatus] = useState(false);

    const history = useHistory();

    if(!props.auth) {
        history.push('/login');
    }

    useEffect(() => {
        if(!postStatus) {
            getAllPosts();
            setPostStatus(true);
        }
        
    })

    async function getAllPosts() {

    
        const response = await fetch("http://localhost:8080/api/posts",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });
    
        const body = await response.json();
        await console.log("getting posts");
        setPosts(body);
    }




    async function post(message) {
    
        const response = await fetch("http://localhost:8080/api/posts",
        {
            method: 'POST',
            //mode:'no-cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : props.username,
                "message": message
            })
        });

        getAllPosts();
    
    }



    return (
        <>
            <NewsFeed auth={props.auth} getPosts={getAllPosts} posts={posts} handlePost={post}/>
        </>
    )
}

HomePageContainer.propTypes ={
    username: PropTypes.string,
    auth: PropTypes.bool
}
