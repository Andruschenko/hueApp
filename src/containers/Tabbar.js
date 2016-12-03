import { connect } from 'react-redux';

import Tabbar from '../components/Tabbar';

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
    changeTab,
    dispatch,
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabbar);
