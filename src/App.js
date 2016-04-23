import React from 'react-native';
import { connect } from 'react-redux';
import Tabbar from './containers/Tabbar';
import Loading from './components/Loading';

const App = props => {
  let component = <Tabbar />;
  if (props.isLoading) component = <Loading progress={props.loadProgress} />;
  return component;
};

export default connect(
  state => state.global
)(App);
