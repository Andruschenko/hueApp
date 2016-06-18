import React, {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './Pieces.styles';

export default Pieces = props => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Red</Text>
      <View style={styles.elm}>
        <Image
          style={styles.image}
          source={require('../../mocks/01.png')}
        />
        <Text>burda</Text>
      </View>

      <View style={styles.elm}>
        <Image
          style={styles.image}
          source={require('../../mocks/04.png')}
        />
        <Text>sixteen</Text>
      </View>

      <Text style={styles.title}>Green</Text>

      <View style={styles.elm}>
        <Image
          style={styles.image}
          source={require('../../mocks/02.png')}
        />
        <Text>hackday</Text>
      </View>

      <Text style={styles.title}>Blue</Text>

      <View style={styles.elm}>
        <Image
          style={styles.image}
          source={require('../../mocks/03.png')}
        />
        <Text>twenty</Text>
      </View>
    </View>
  </View>
);
