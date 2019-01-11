/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import { Router } from 'react-native-router-flux';
const RouterWithRedux = connect()(Router);

import { createLogger } from 'redux-logger';
const logger = createLogger(); //require('redux-logger').createLogger();

import ReduxThunk from 'redux-thunk';
const middleware = [logger, ReduxThunk];

import { createStore, applyMiddleware, compose } from 'redux';
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

import reducers from './src/reducers';
import Scenes from './src/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Scenes} />
      </Provider>
    );
  }
}
