import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import styles from './styles';

const Board = props => (
  <View style={styles.container}>
    <Image
      source={{ uri: props.src }}
      style={styles.image}
    />
    <Text style={styles.date} >{props.date}</Text>
  </View>
);
Board.propTypes = {
  date: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Board;
