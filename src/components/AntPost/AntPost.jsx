import React, {useState} from 'react';
import { Comment, Tooltip, Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(16),
      },
    },
  }));


export default function AntPost(props) {

    const classes = useStyles();

    const [liked, setLiked] = useState(false);

    

    async function likePost() {
    
        const response = await fetch("http://10.10.0.49:8080/api/posts/" + props.messageId + "/likes",
        {
            method: 'POST',
            //mode:'no-cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : props.currentUsername(),
                "like" : !props.likeState
            })
        });

        setLiked(true);
        props.refreshPosts();

    }


    const actions = [
        <span key="comment-basic-like">
          <Tooltip title={props.likeState ? "unlike" : "like"}>
            <Icon
              type="like"
              theme={props.likeState ? 'filled' : 'outlined'}
              onClick={likePost}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{props.likeCount}</span>
        </span>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ];

    return (
        <div className={classes.root}>

            <Paper >
                <div style={{padding: '1em'}}>
                    <Comment

                        author = {props.username}
                        avatar = {
                            <Avatar style={{ backgroundColor: '#9C4532', verticalAlign: 'middle'}} size="large">
                                {props.username.charAt(0).toUpperCase()}
                            </Avatar>
                        }
                        content = {
                            <p>
                                {props.message}
                            </p>

                        }
                        datetime = {
                            <Tooltip title={moment(props.timestamp, 'X').format('YYYY-MM-DD HH:mm:ss')}>
                                <span>posted {moment(props.timestamp, 'X').fromNow()}</span>
                            </Tooltip>
                        }
                        actions = {
                            actions
                        }
                    />
                </div>
            </Paper>


        </div>
    )
}


AntPost.propTypes = {
    username: PropTypes.string,
    currentUsername: PropTypes.func,
    message: PropTypes.string,
    timestamp: PropTypes.string,
    likes: PropTypes.string,
    likeCount: PropTypes.string,
    messageId: PropTypes.string,
    refreshPost: PropTypes.func,
    likeState: PropTypes.bool
}
