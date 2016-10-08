import React, {
  Component,
} from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

export default function native() {
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
}
