import React, {
  Component,
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import CameraComp from './components/CameraComp';
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


