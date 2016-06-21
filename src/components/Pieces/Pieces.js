import React, {
  View,
  Text,
  Image,
  PropTypes,
} from 'react-native';

import styles from './Pieces.styles';

export default Pieces = props => {
  
  const redLength = props.red.length;
  const greenLength = props.green.length;
  const blueLength = props.blue.length;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{`Red - ${redLength} pieces`}</Text>
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

        <Text style={styles.title}>{`Green - ${greenLength} pieces`}</Text>

        <View style={styles.elm}>
          <Image
            style={styles.image}
            source={require('../../mocks/02.png')}
          />
          <Text>hackday</Text>
        </View>

        <Text style={styles.title}>{`Blue - ${blueLength} pieces`}</Text>

        <View style={styles.elm}>
          <Image
            style={styles.image}
            source={require('../../mocks/03.png')}
          />
          <Text>twenty</Text>
        </View>
      </View>
    </View>
  )
};
Pieces.propTypes = {
  red: PropTypes.array.isRequired,
  green: PropTypes.array.isRequired,
  blue: PropTypes.array.isRequired,
};
