import React, {
  ScrollView,
  View,
  PropTypes,
} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import theme from '../../constants/tabBarTheme';

// Import containers
import Photo from '../../containers/Photo';
import Pieces from '../../containers/Pieces';
import Boards from '../../containers/Boards';

export default Tabbar = props => (
  <ScrollableTabView
    tabBarPosition="bottom"
    tabBarUnderlineColor={theme.color.three}
    tabBarActiveTextColor={theme.color.three}
    tabBarInactiveTextColor={theme.color.two}
    page={props.tab}
    onChangeTab={ind => props.changeTab(ind.i)}
    renderTabBar={() => <DefaultTabBar />}
  >
    <ScrollView
      tabLabel="Boards"
    >
      <Boards />
    </ScrollView>

    <View
      tabLabel="Photo"
    >
      <Photo />
    </View>

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
