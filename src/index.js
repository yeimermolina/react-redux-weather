import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise, composeWithDevTools)(createStore);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...reducers, ReduxPromise),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
