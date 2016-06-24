import React, {
  Component,
  View,
  Text,
  StyleSheet,
  PropTypes,
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
    <Image source={{ uri: props.base64 }} />
  );

  return (
    <View>
      {_renderText()}
    </View>
  );
}
Piece.propTypes = {
  base64: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
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
