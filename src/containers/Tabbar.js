import React, {
  ScrollView,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import theme from '../theme';

import Photo from './Photo';
import Pieces from './Pieces';
import Boards from './Boards';

const Tabbar = () => (
  <ScrollableTabView
    initialPage={1}
    tabBarPosition="bottom"
    tabBarUnderlineColor={theme.color.three}
    tabBarActiveTextColor={theme.color.three}
    tabBarInactiveTextColor={theme.color.two}
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

export default Tabbar;
