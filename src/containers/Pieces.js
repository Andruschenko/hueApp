import React, {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {

  },
  image: {
    width: 200,
    height: 80,
    margin: 8,
  },
  elm: {
    padding: 2,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'AvenirNext-Heavy',
  }
});

const Pieces = props => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Red</Text>
      <View style={styles.elm}>
      <Image
        style={styles.image}
        source={require('../mocks/01.png')}
      />
        <Text>burda</Text>
      </View>

      <View style={styles.elm}>
        <Image
          style={styles.image}
          source={require('../mocks/04.png')}
        />
        <Text>sixteen</Text>
      </View>

      <Text style={styles.title}>Green</Text>

      <View style={styles.elm}>
      <Image
        style={styles.image}
        source={require('../mocks/02.png')}
      />
        <Text>hackday</Text>
      </View>

      <Text style={styles.title}>Blue</Text>

      <View style={styles.elm}>
      <Image
        style={styles.image}
        source={require('../mocks/03.png')}
      />
        <Text>twenty</Text>
      </View>
    </View>
  </View>
);

// export default Pieces;
// export default connect(
//   state => ({ pieces: state.global.pieces })
// )(Pieces);
export default Pieces;
