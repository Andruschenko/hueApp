import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontFamily: 'AvenirNext-Heavy',
    textAlign: 'center',
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
  }
});
