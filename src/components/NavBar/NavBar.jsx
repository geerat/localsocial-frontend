import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import NavButtons from '../NavButtons/NavButtons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            LocalSocial
          </Typography>
          <NavButtons auth={props.auth} authBool={props.authBool} username={props.username} setAuth={props.setAuth} setUsername={props.setUsername}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
    auth: PropTypes.func,
    username: PropTypes.func,
    setAuth: PropTypes.func,
    setUsername: PropTypes.func,
}