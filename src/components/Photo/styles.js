import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({
  preview: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  buttonBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  buttonOuter: {
    flex: 1,
    padding: 10,
    backgroundColor: '#6FDCED',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInner: {
    width: 66,
    height: 66,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  buttonText: {
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 150,
    margin: 3,
  },
  frame: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6FDCED',
  }
});
