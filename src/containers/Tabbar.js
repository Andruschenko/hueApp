import React, {
  ScrollView,
  PropTypes,
} from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../util/redux';
import * as globalActions from '../actions/global';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import theme from '../theme';

import Photo from './Photo';
import Pieces from './Pieces';
import Boards from './Boards';

const Tabbar = props => (
  <ScrollableTabView
    tabBarPosition="bottom"
    tabBarUnderlineColor={theme.color.three}
    tabBarActiveTextColor={theme.color.three}
    tabBarInactiveTextColor={theme.color.two}
    page={props.tab}
    onChangeTab={i => props.changeTab(i.i)}
    renderTabBar={() => <DefaultTabBar />}
  >
    <ScrollView
      tabLabel="Boards"
    >
      <Boards />
    </ScrollView>

    <ScrollView
      tabLabel="Photo"
    >
      <Photo />
    </ScrollView>

    <ScrollView
      tabLabel="Pieces"
    >
      <Pieces />
    </ScrollView>
  </ScrollableTabView>
);
Tabbar.propTypes = {
  tab: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    tab: state.global.tab,
  }),
  mapDispatchToProps(globalActions)
)(Tabbar);
