import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../../screens/login-form';
import SignUpForm from '../../screens/sign-up-form';

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

  showResults = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
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
        {value === 0 && <TabContainer><LoginForm onSubmit={this.showResults} /></TabContainer>}
        {value === 1 && <TabContainer><SignUpForm onSubmit={this.showResults} /></TabContainer>}
      </div>
    );
  }
}

LoginBoxTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginBoxTabs);
