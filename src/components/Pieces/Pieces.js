import React, {
  View,
  Text,
  Image,
  PropTypes,
} from 'react-native';

import Piece from '../Piece';
import styles from './Pieces.styles';
import * as colors from '../../constants/colors';

export default Pieces = props => {

  const { red, green, blue } = props;

  const _renderEmpty = () => (
    <Text style={styles.text}>{`No pieces of this color detected.`}</Text>
  );

  const _renderPieces = (category, title, color) => (
    <View>
      <Text style={[styles.title, {color: color}]}>{`${title} (${category.length})`}</Text>
      <View style={styles.elm}>
        {
          category.length > 0 ? category.map((piece, index) => (
          <Piece key={index} color={color} {...piece} />
          )) : _renderEmpty()
        }
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        {_renderPieces(red, 'Red', colors.red)}
        {_renderPieces(green, 'Green', colors.green)}
        {_renderPieces(blue, 'Blue', colors.blue)}
      </View>
    </View>
  )
};
Pieces.propTypes = {
  red: PropTypes.array.isRequired,
  green: PropTypes.array.isRequired,
  blue: PropTypes.array.isRequired,
};
