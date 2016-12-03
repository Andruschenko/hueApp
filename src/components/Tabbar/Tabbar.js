import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import DeviceInfo from 'react-native-device-info'

import theme from '../../constants/tabBarTheme';

// Import containers
import Photo from '../../containers/Photo';
import Pieces from '../../containers/Pieces';
import Boards from '../../containers/Boards';

export default Tabbar = props => {

  _isIosSimulator = () => {
    return Platform.OS === 'ios' && DeviceInfo.isEmulator();
  };

  _renderPlaceholder = () => (
    <View style={styles.container}>
      <Text style={styles.text}>No Camera available in iOS Simulator</Text>
    </View>
  );

  return (
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
        style={{ flex: 1 }}
      >
        {_isIosSimulator() ? _renderPlaceholder() : <Photo />}
      </View>

      <ScrollView
        tabLabel="Pieces"
      >
        <Pieces />
      </ScrollView>
    </ScrollableTabView>
  )
};

Tabbar.propTypes = {
  tab: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
});
