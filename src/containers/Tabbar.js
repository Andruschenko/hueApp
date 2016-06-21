import { connect } from 'react-redux';

import Tabbar from '../components/Tabbar/Tabbar';

import {
  changeTab
} from '../actions/global';
const mapStateToProps = (state) => {
  return ({
    tab: state.global.tab,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    changeTab: (index) => changeTab(index),
    dispatch,
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabbar);
