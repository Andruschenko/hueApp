import { StyleSheet, Dimensions } from 'react-native';

import { fontFamily, titleSize } from '../../constants/font';

export default styles = StyleSheet.create({
  header: {
    fontSize: titleSize,
    fontFamily: fontFamily,
    textAlign: 'center',
    paddingVertical: 10,
  },
  container: {
    padding: 40,
    flex: 1,
  },
  callToActionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 22,
  },
});
