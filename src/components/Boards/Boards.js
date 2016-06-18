import React, {
  View,
  Text,
  PropTypes,
} from 'react-native';

import styles from './Boards.styles';

import Board from '../Board';

export default Boards = props => (
  <View style={styles.container}>
    <Text style={styles.header}>Your boards</Text>
    {props.boards.map((board, index) => (
      <Board key={index} {...board} />
    ))}
  </View>
);
Boards.propTypes = {
  boards: PropTypes.array.isRequired,
};
