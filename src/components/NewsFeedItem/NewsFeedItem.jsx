import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Avatar, Icon } from 'antd';


export default function NewsFeedItem(props) {



  return (

<div style={{maxWidth: "80%"}}>
    <Card variant="outlined">
        <CardContent>


            <div>
                    

                    <Avatar style={{ backgroundColor: '#9C4532', verticalAlign: 'middle'}} size="large">
                        {props.username.charAt(0).toUpperCase()}
                    </Avatar>



                    <Typography color="textSecondary">
                        {props.username} | { new Date(props.timestamp * 1000).toString() }
                    </Typography>


            </div>

            <Typography variant="body2" component="p">
                {props.message}
            </Typography>

        </CardContent>

        <CardActions>
            <Button size="small"><Icon type="like" /></Button>
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