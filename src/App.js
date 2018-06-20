import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './reducers/store/store';
import HomeScreen from './screens/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomeScreen />
        </div>
      </Provider>
    );
  }
}

export default App;
