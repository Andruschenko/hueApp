import { connect } from 'react-redux';
import { mapDispatchToProps } from '../util/redux';
import * as globalActions from '../actions/global';

import Tabbar from '../components/Tabbar/Tabbar';

export default connect(
  state => ({
    tab: state.global.tab,
    boards: state.boards,
  }),
  mapDispatchToProps(globalActions)
)(Tabbar);
