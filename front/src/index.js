import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./client/Root";
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './shared/store/modules';
import { Provider } from 'react-redux' ;
import { Component } from 'react';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
