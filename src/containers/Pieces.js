import React, {
  View,
  StyleSheet,
  Image
} from 'react-native';

import { connect } from 'react-redux';

const images = [require('../mocks/01.jpg'), require('../mocks/02.jpg'), require('../mocks/03.jpg'), require('../mocks/04.jpg')];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  color: {

  },
  image: {
    height: 50,
  }
});


_renderPieces = (pieces) => {
  pieces.map((piece) => (
    <View>
      <Image
        style={styles.image}
        source={piece}
      />
    </View>
  ));
}

const Pieces = props => (
  <View style={styles.container}>
    <View style={styles.color}>
    </View>
    <View style={styles.color}>
    </View>
    <View style={styles.color}>
    </View>
    { this._renderPieces(images) }
  </View>
);

// export default Pieces;
export default connect(
  state => ({ pieces: state.global.pieces })
)(Pieces);
