import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, routerReducer } from 'redux-seamless-immutable';
//import { routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
//import createHistory from 'history/createBrowserHistory';

//const history = createHistory();

//const reactRouterMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
    form: formReducer
  }),
  //applyMiddleware(thunkMiddleware, reactRouterMiddleware)
  //composeWithDevTools(applyMiddleware(thunkMiddleware, reactRouterMiddleware))
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

//export { store, history };
export { store };
