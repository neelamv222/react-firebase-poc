import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import validate from '../../helper/form-validation';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { startLogin } from '../../reducers/auth-actions';


const renderTextField = props => (
  <TextField
    error={props.meta.touched && props.meta.error}
    className="text-field"
    //hintText={props.label}
    //floatingLabelText={props.label}
    helperText={props.meta.touched && props.meta.error}
    {...props.input}
    {...props}
  />
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="App">
      <Grid container spacing={16}>
        <Grid item xs={16} sm={5}>
          <h2>Login Into your Account:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                className="input-field"
                name="email"
                component={renderTextField}
                label="Email"
              />
            </div>
            <div>
              <Field
                className="input-field"
                name="password"
                type="password"
                component={renderTextField}
                label="Passowrd"
              />
            </div>
            <button
              className="btn submit-btn"
              type="submit"
              label="submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
              className="btn clear-btn"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </button>
          </form>
        </Grid>
        <Grid className="or-grid" item xs={16} sm={1}>
          OR
        </Grid>
        <Grid className="social-providers-btn" item xs={16} sm={5}>
          <Button variant="contained" color="secondary" className="social-btns" onClick={props.startLogin}>
            Sign In with Google
            <span className="fa-stack fa-lg">
              <i className="fa fa-google-plus fa-stack-1x"></i>
            </span>
          </Button>
          <Button variant="contained" color="primary" className="social-btns">
            Sign In with Facebook
            <span className="fa-stack fa-lg">
              <i className="fa fa-facebook fa-stack-1x"></i>
            </span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm));
