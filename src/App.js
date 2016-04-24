import React from 'react-native';
import { connect } from 'react-redux';
import Tabbar from './containers/Tabbar';
import Loading from './components/Loading';

const App = props => {
  // console.log(props);
  const { isLoading, loadProgress } = props.global;
  let component = <Tabbar />;
  if (isLoading) component = <Loading progress={loadProgress} />;
  return component;
};

export default connect(
  state => state
)(App);
