import React, {
  Component,
  View,
  Text,
  StyleSheet,
  PropTypes,
  Image,
} from 'react-native';

export default Piece = props => {

  const {
    base64,
    startx,
    endx,
    starty,
    endy,
    color,
  } = props;

  const _renderText = () => (
    <Text style={styles.text}>{`startx: ${startx}, endx: ${endx}`}</Text>
  );

  const _renderPiece = () => (
    <Image style={[styles.image, {borderColor: color}]} source={{ uri: `data:image/jpeg;base64,${base64}` }} />
  );

  return (
    <View style={styles.container} >
      {_renderPiece()}
    </View>
  );
}
Piece.propTypes = {
  base64: PropTypes.string.isRequired,
  color: PropTypes.string,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
  },
  image: {
    height: 120,
    borderWidth: 3,
  },
  text: {
    marginVertical: 3,
    fontSize: 20,
  },
});
