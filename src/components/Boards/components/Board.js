import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import styles from './styles';

const Board = props => {

  _renderImage = () => (
    props.src ?
      (
        <Image
          source={{uri: props.src}}
          style={styles.image}
        />
      ) :
      (
        <View style={styles.noImage}>
          <Text>No image</Text>
        </View>
      )
  );

  return (
    <View style={styles.container}>
      {_renderImage()}
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};
Board.propTypes = {
  date: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Board;
