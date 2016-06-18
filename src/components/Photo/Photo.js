import React, {
  View,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  CameraRoll,
} from 'react-native';

import Camera from 'react-native-camera';
const RNFS = require('react-native-fs');

import styles from './Photo.styles.js';

export default class Photo extends React.Component {
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
  };

  // _sendToServer = (uri) => {
  //   readFile(path [, encoding])
  // }

  _renderTakePicture = () => (
    <View style={styles.buttonOuter}>
      <View style={styles.buttonInner}></View>
    </View>
  );

  _showLastImage = () => (
    <View>
      <Text>{ `Pic als String: ${String(this.state.pic)}` }</Text>
      <Image
        style={styles.image}
        source={{uri: this.state.pic}}
      />
    </View>
  );

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
