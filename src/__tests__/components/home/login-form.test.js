import React from 'react';
import { shallow } from 'enzyme';
//import renderer from 'react-test-renderer';

import { LoginForm } from '../../../components/home/login-form';

/*it('Should renders SignIn form correctly', () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('>>> Login Form --snapshot <<', () => {
  it('++ Capturing loginform snapshot ++', () => {
    const tree = renderer.create(<LoginForm onSubmit={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});*/

describe('>>> Login Form --snapshot <<', () => {
  test('++ Capturing loginform snapshot ++', () => {
    const wrapper = shallow(<LoginForm onSubmit={() => null} />);
    expect(wrapper).toMatchSnapshot();
  });
});
