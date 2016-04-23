'use strict';

import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

class ColourDownApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ColourDownApp', () => ColourDownApp);