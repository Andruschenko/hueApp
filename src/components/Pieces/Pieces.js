import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Piece from '../Piece';
import styles from './Pieces.styles';
import * as colors from '../../constants/colors';

export default Pieces = props => {

  const { red, green, blue } = props;
  const empty = red.length == 0 && green.length == 0 && blue.length == 0;

  const _renderNoPieces = () => (
    <Text style={styles.noPiecesText}>{`No pieces of this color detected.`}</Text>
  );

  const _renderPiece = (category, title, color) => (
    <View>
      <Text style={[styles.title, {color: color}]}>{`${title} (${category.length})`}</Text>
      <View style={styles.elm}>
        {
          category.length > 0 ? category.map((piece, index) => (
          <Piece key={index} color={color} {...piece} />
          )) : _renderNoPieces()
        }
      </View>
    </View>
  );

  const _renderPieces = () => (
    <View style={styles.container}>
      {_renderPiece(red, 'Red', colors.red)}
      {_renderPiece(green, 'Green', colors.green)}
      {_renderPiece(blue, 'Blue', colors.blue)}
    </View>
  );

  const _renderEmpty = () => (
    <View style={styles.emptyMessageContainer}>
      <Text style={styles.text}>No results (yet).</Text>
      <Text style={styles.subText}>This text may show up when no photo was taken yet or the analysis did not find any pieces.</Text>
    </View>
  );

  return (
    <View>
      {empty ? _renderEmpty() : _renderPieces()}
    </View>
  )
};
Pieces.propTypes = {
  red: PropTypes.array.isRequired,
  green: PropTypes.array.isRequired,
  blue: PropTypes.array.isRequired,
};
