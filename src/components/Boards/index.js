import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

import Board from './components/Board';  // A single board


export default Boards = props => {

  const _renderBoards = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Your boards</Text>
      {props.boards.map((board, index) => (
        <Board key={index} {...board} />
      ))}
    </View>
  );

  const _renderEmpty = () => (
    <View style={styles.callToActionContainer}>
      <Text style={styles.text}>No boards yet? - Take a photo!</Text>
    </View>
  );

  return (
    <View>
      {props.boards.length > 0 ? _renderBoards() : _renderEmpty()}
    </View>
  );
};
Boards.propTypes = {
  boards: PropTypes.array.isRequired,
};
