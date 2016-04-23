import React, {
  StyleSheet,
  View,
  Text,
  PropTypes,
} from 'react-native';
import { connect } from 'react-redux';
import Board from '../components/Board';

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontFamily: 'AvenirNext-Heavy',
    textAlign: 'center',
  },
  container: {
    padding: 40,
    flex: 1,
  },
});

const Boards = props => (
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

export default connect(
  state => ({ boards: state.boards })
)(Boards);
