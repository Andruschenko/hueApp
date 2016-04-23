import React, {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
// import theme from '../theme';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  buttonBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    right: 0,
    left: 0,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    margin: 5,
  },
  buttonText: {
    backgroundColor: '#FFFFFF',
  },
});

class Photo extends React.Component {
  takePicture() {
    this.camera.capture()
      .then((data) => {

      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fit}
      >
        <View style={styles.buttonBar}>
          <TouchableHighlight style={styles.button} onPress={this._switchCamera.bind(this)}>
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._takePicture.bind(this)}>
            <Text style={styles.buttonText}>Take</Text>
          </TouchableHighlight>
        </View>
      </Camera>
    );
  }
}

export default Photo;
