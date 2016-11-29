import { StyleSheet } from 'react-native';

import { fontFamily, titleSize } from '../../constants/font';

export default styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  elm: {
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: titleSize,
    fontFamily: fontFamily,
  },
  noPiecesText: {
    marginVertical: 3,
    fontSize: 20,
  },
});
