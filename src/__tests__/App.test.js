import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import App from '../App';

let wrapper;
const mockStore = configureStore([]);
const store = mockStore({});

describe('>> App <<', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should have App className', () => {
    expect(wrapper.find('.App')).to.have.length(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
