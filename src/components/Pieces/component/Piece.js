import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import styles from './styles';

export default Piece = props => {
  const {
    image,
    color,
    // startx,
    // endx,
    // starty,
    // endy,
  } = props;

  // const _renderText = () => (
  //   <Text style={styles.text}>{`startx: ${startx}, endx: ${endx}`}</Text>
  // );

  const _renderPiece = () => (
    <Image style={[styles.image, {borderColor: color}]} source={{ uri: `data:image/jpeg;base64,${image}` }} />
  );

  return (
    <View style={styles.container} >
      {_renderPiece()}
    </View>
  );
}
Piece.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
