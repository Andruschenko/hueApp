import React, {
  ScrollView,
  PropTypes,
} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import theme from '../../constants/tabBarTheme';

import Photo from '../Photo';
import Pieces from '../Pieces';
import Boards from '../Boards';

export default Tabbar = props => (
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
      <Boards
        boards={props.boards}
      />
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
  boards: PropTypes.array.isRequired,
};
