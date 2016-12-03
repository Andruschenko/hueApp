import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Piece from './component/Piece';
import styles from './styles';
import * as colors from '../../constants/colors';

const Pieces = props => {

  const { red, green, blue, renderEmpty } = props;

  console.log('props', props);

  const _renderNoPiecesInColor = () => (
    <Text style={styles.noPiecesText}>{`No pieces of this color detected.`}</Text>
  );

  const _renderPiece = (category, title, color) => (
    <View>
      <Text style={[styles.title, {color: color}]}>{`${title} (${category.length})`}</Text>
      <View style={styles.elm}>
        {
          category.length > 0 ? category.map((piece, index) => (
          <Piece key={index} color={color} image={piece} />
          )) : _renderNoPiecesInColor()
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

  console.log('renderEmpty', renderEmpty);

  return (
    <View>
      { _renderPieces() }
    </View>
  )
};
Pieces.propTypes = {
  red: PropTypes.array.isRequired,
  green: PropTypes.array.isRequired,
  blue: PropTypes.array.isRequired,
  renderEmpty: PropTypes.func,
};
Pieces.defaultProps = {
  renderEmpty: () => {},
};

export default Pieces;

// { renderEmpty ? renderEmpty() : _renderPieces() }
