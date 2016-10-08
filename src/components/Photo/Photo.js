import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  CameraRoll,
} from 'react-native';

import Camera from 'react-native-camera';

import styles from './Photo.styles.js';

import { processImage } from '../../actions/global';
import { addBoard } from '../../actions/boards';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  _takePicture = () => {
    this.camera.capture({ target: Camera.constants.CaptureTarget.disk })
      .then(imageData => this.props.dispatch(processImage(imageData.path)))
      .then(image => this.props.dispatch(addBoard(image)))
      .catch(err => console.error(err));
  };

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
        />
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.button} onPress={this._takePicture}>
            { this._renderTakePicture() }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
