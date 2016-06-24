import React, {
  View,
  Text,
  Image,
  PropTypes,
} from 'react-native';

import Piece from '../Piece';

import styles from './Pieces.styles';

export default Pieces = props => {

  const redLength = props.red.length;
  const greenLength = props.green.length;
  const blueLength = props.blue.length;

  const _renderEmpty = () => (
    <Text style={styles.text}>{`No pieces of this color in image.`}</Text>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{`Red - ${redLength} pieces`}</Text>
        <View style={styles.elm}>
          {
            redLength > 0 ? props.red.map((piece, index) => (
            <Piece key={index} color="red" {...piece} />
            )) : _renderEmpty()
          }
        </View>

        <Text style={styles.title}>{`Green - ${greenLength} pieces`}</Text>

        <View style={styles.elm}>
          {
            greenLength > 0 ? props.green.map((piece, index) => (
            <Piece key={index} color="green" {...piece} />
            )) : _renderEmpty()
          }
        </View>

        <Text style={styles.title}>{`Blue - ${blueLength} pieces`}</Text>

        <View style={styles.elm}>
          {
            blueLength > 0 ? props.blue.map((piece, index) => (
            <Piece key={index} color="blue" {...piece} />
            )) : _renderEmpty()
          }
        </View>
      </View>
    </View>
  )
};
Pieces.propTypes = {
  red: PropTypes.array.isRequired,
  green: PropTypes.array.isRequired,
  blue: PropTypes.array.isRequired,
};
