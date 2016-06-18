import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';
import theme from '../constants/tabBarTheme';
import Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loading = ({ progress }) => (
  <View style={styles.container}>
    <Progress.CircleSnail
      size={250}
      animating={true}
      animated={true}
      progress={progress}
      color={[theme.color.one, theme.color.two, theme.color.three]}
      thickness={10}
    />
  </View>
);
Loading.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loading;
