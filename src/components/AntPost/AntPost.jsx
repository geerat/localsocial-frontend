import React, {useState} from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
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


    return (
        <div className={classes.root}>

            <Paper >
                <div style={{padding: '2em'}}>
                    <Comment

                        author={props.username}
                        avatar={
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
                                <span>{moment(props.timestamp, 'X').fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </div>
            </Paper>


        </div>
    )
}


AntPost.propTypes = {
    username: PropTypes.string,
    message: PropTypes.string,
    timestamp: PropTypes.string

}
