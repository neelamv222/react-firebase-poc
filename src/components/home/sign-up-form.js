import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import validate from '../../helper/form-validation';

const renderTextField = props => (
  <TextField
    error={props.meta.touched && props.meta.error}
    className="text-field"
    hintText={props.label}
    floatingLabelText={props.label}
    helperText={props.meta.touched && props.meta.error}
    {...props.input}
    {...props}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            className="input-field"
            name="firstName"
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field
            className="input-field"
            name="lastName"
            component={renderTextField}
            label="Last Name"
          />
        </div>
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
        <div>
          <Field name="sex" component={renderRadioGroup}>
            <label>
              <Radio value="male" label="male" />Male
            </label>
            <label>
              <Radio value="female" label="female" />Female{' '}
            </label>
          </Field>
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
  form: 'SignUpForm',
  validate
})(SignUpForm);
