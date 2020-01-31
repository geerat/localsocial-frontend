import React, { useState, useEffect } from 'react'
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';
import { notification, Icon } from 'antd';
export default function HomePageContainer(props) {


    const [posts, setPosts] = useState([]);
    const [postStatus, setPostStatus] = useState(false);
    const [start, setStart] = useState(1); //currently this is static
    const [end, setEnd] = useState(20)
    const history = useHistory();

    

    useEffect(() => {
        console.log("jome page effect")
        if(!postStatus) {
            getAllPosts();
            setPostStatus(true);
        }

        if(props.auth() === "false") {
            console.log("moving to login")
            history.push('/login');
        }
        
    })



    async function getAllPosts() {
    
        const response = await fetch(`http://10.10.0.49:8080/api/posts?start=${start}&end=${end}`,
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

    function getMorePosts() {
        setEnd(end + 20);
    
        getAllPosts();
    }





    async function post(message) {
    
        const response = await fetch("http://10.10.0.49:8080/api/posts",
        {
            method: 'POST',
            //mode:'no-cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : props.username(),
                "message": message
            })
        });


        notification.open({
            message: "Your message has been posted!",
            top: '10vh',
            description: "",
            icon: <Icon type="plus" />
        })

        getAllPosts();
    
    }

    return (
        <>
            <NewsFeed auth={props.auth} getPosts={getAllPosts} posts={posts} handlePost={post} getMorePosts={getMorePosts}/>
        </>
    )
}

HomePageContainer.propTypes ={
    username: PropTypes.func,
    auth: PropTypes.func
}
