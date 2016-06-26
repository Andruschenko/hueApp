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
  } = props;

  const _renderText = () => (
    <Text style={styles.text}>{`startx: ${startx}, endx: ${endx}`}</Text>
  );

  const _renderPiece = () => (
    <Image style={styles.image} source={{ uri: `data:image/jpeg;base64,${props.base64}` }} />
  );

  return (
    <View style={styles.container} >
      {_renderPiece()}
    </View>
  );
}
Piece.propTypes = {
  base64: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 130,
    padding: 5,
  },
  image: {
    width: 200,
    height: 80,
    margin: 8,
  },
  text: {
    marginVertical: 3,
    fontSize: 20,
  },
});
