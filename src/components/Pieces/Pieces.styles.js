import { StyleSheet } from 'react-native';

import { fontFamily, titleSize } from '../../constants/font';

export default styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elm: {
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: titleSize,
    fontFamily: fontFamily,
  },
  text: {
    marginVertical: 3,
    fontSize: 20,
  },
});
