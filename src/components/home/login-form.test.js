import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from './login-form';

it('Should renders SignIn form correctly', () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
