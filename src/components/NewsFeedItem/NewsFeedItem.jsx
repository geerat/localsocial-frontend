import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

const useStyles = makeStyles({

});

export default function NewsFeedItem(props) {

  const classes = useStyles();

  return (

<div style={{maxWidth: "80%"}}>
    <Card className={classes.card} variant="outlined">
        <CardContent>


            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'space-around'}}>
                    
                <div>
                    <Avatar style={{ backgroundColor: '#9C4532', verticalAlign: 'middle'}} size="large">
                        {props.username.charAt(0).toUpperCase()}
                    </Avatar>
                </div>

                <div style={{padding: "2em", textAlign: "center"}}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.username} | { new Date(props.timestamp * 1000).toString() }
                    </Typography>
                </div>

            </div>

            <Typography variant="body2" component="p">
                {props.message}
            </Typography>

        </CardContent>

        <CardActions>
            <Button size="small">Like</Button>
        </CardActions>

    </Card>
</div>
  );
}

NewsFeedItem.propTypes = {
    message: PropTypes.string,
    username: PropTypes.string,
    timestamp: PropTypes.string
}