import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';

import validate from '../../helper/form-validation';

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
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);
