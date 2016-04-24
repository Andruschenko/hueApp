import React, {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image,
  CameraRoll,
} from 'react-native';
// import theme from '../theme';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import api from '../api';
import { mapDispatchToProps } from '../util/redux';
import * as globalActions from '../actions/global';

const RNFS = require('react-native-fs');

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

class Photo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      picUri: ""
    };
  }

  _takePicture = () => {
    this.camera.capture({ target: Camera.constants.CaptureTarget.disk }, (error, imageUri) => {
      /** get image from library and send
        request to api **/

      console.log('imageUri', imageUri);
      if (!error) {
        this.setState({ picUri: imageUri})
      }

      RNFS.readFile(imageUri, 'base64')
        .then(image => {
          this.props.sendImage(image);
        });

    });
  }

  // _sendToServer = (uri) => {
  //   readFile(path [, encoding])
  // }

  _renderTakePicture = () => (
    <View style={styles.buttonOuter}>
      <View style={styles.buttonInner}></View>
    </View>
  )

  _showLastImage = () => (
    <View>
      <Text>{ `Pic als String: ${String(this.state.pic)}` }</Text>
      <Image
        style={styles.image}
        source={{uri: this.state.pic}}
      />
    </View>
  )

  render() {
    return (
      <View>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fit}
      >
        <View style={styles.buttonBar}>
          <TouchableHighlight style={styles.button} onPress={this._takePicture}>
          { this._renderTakePicture() }
          </TouchableHighlight>
        </View>
      </Camera>
      </View>
    );
  }
}

export default connect(
  state => ({}),
  mapDispatchToProps(globalActions)
)(Photo);
