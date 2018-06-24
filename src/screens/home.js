import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import LoginBoxTabs from '../components/home/login-tab-box';

const styles = theme => ({
  rootHome: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  loginBoxStyle: {
    height: 400
  },
  bar: {
    marginBottom: 10
  }
});

const HomeScreen = props => {
  const { classes } = props;
  return (
    <div className={classes.rootHome}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            React & Material-UI Sample Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={24} className="app-heading-section">
        <Grid item xs={5} sm={5}>
          <div className="l-home-lhs">
            <div>
              <header className="App-header">
                <h1 className="App-title">Welcome to Chat App</h1>
              </header>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} className="login-section">
          <Paper className={classes.loginBoxStyle}>
            <LoginBoxTabs />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

HomeScreen.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HomeScreen);
