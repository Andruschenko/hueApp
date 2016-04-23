'use strict';

import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import CameraComp from './src/components/CameraComp';
import Navigator from './src/Navigator';
import configureStore from './src/store/configureStore';

const store = configureStore();

class ColourDownApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ColourDownApp', () => ColourDownApp);
