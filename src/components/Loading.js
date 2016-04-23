import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';
import theme from '../theme';
import Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    margin: 180,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loading = ({ progress }) => (
  <View style={styles.container}>
    <Progress.Circle
      size={250}
      animated={true}
      progress={progress}
      color={theme.color.three}
      thickness={10}
    />
  </View>
);
Loading.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loading;
