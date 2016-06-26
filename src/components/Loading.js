import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
} from 'react-native';
import theme from '../constants/tabBarTheme';
import Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 20,
    fontSize: 22,
    color: theme.color.one,
  },
});

const Loading = ({ progress }) => (
  <View style={styles.container}>
    <Progress.CircleSnail
      size={200}
      animating={true}
      animated={true}
      progress={progress}
      color={[theme.color.one, theme.color.two, theme.color.three]}
      thickness={8}
    />
    <Text style={styles.text}>Processing your image...</Text>
  </View>
);
Loading.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loading;
