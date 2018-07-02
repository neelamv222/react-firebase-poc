import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import LoginForm from './login-form';
import SignUpForm from './sign-up-form';

import { signInAction, signUpAction } from '../../reducers/auth-actions';

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class LoginBoxTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onSignInSubmit = values => {
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.props.signInAction(values);
  };

  onSignUpSubmit = values => {
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.props.signUpAction(values);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="SIGN IN" />
            <Tab label="NEW USER" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <LoginForm onSubmit={this.onSignInSubmit} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <SignUpForm onSubmit={this.onSignUpSubmit} />
          </TabContainer>
        )}
      </div>
    );
  }
}

LoginBoxTabs.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  signInAction: (values) => dispatch(signInAction(values)),
  signUpAction: (values) => dispatch(signUpAction(values))
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginBoxTabs));
