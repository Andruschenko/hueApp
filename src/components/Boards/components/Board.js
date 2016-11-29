import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 200,
    padding: 5,
  },
  date: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5,
    flex: 1,
  },
  image: {
    flex: 3,
  },
});

const Board = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.src }} />
    <Text style={styles.date} >{props.date}</Text>
  </View>
);
Board.propTypes = {
  date: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Board;
