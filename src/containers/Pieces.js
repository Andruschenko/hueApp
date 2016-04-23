import React, {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  color: {

  },
});

const Pieces = props => (
  <View style={styles.container}>
    <View style={styles.color}>
    </View>
    <View style={styles.color}>
    </View>
    <View style={styles.color}>
    </View>
  </View>
);

export default Pieces;
