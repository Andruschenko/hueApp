import { StyleSheet, Dimensions } from 'react-native';

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
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 22,
  },
  subText: {
    fontSize: 16,
    padding: 20,
    textAlign: 'center',
  },
});
