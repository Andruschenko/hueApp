import React, {
  StyleSheet,
  Image,
  View,
  Text,
  PropTypes,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    height: 130,
    padding: 5,
  },
  date: {
    textAlign: 'center',
    flex: 1,
  },
  image: {
    flex: 2,
  },
});

const Board = props => (
  <View style={styles.container}>
    <Text style={styles.date} >{props.date}</Text>
    <Image style={styles.image} source={{ uri: props.src }} />
  </View>
);
Board.propTypes = {
  date: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Board;
