import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './reducers/store/store';
import { Provider } from 'react-redux';
//import { createStore, combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import { firebase } from './firebase/firebase';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    alert('Successfully Logged In', user);
  } else {
    alert('Successfully Logged Out');
  }
});
registerServiceWorker();
