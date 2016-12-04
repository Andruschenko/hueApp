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

import styles from './styles.js';

import { processImage } from '../../actions/global';
import {
  takePhotoSuccess,
  takePhotoError,
} from '../../actions/camera';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  _takePicture = () => {
    const { dispatch } = this.props;
    this.camera.capture()
      .then(imageData => {
        dispatch(takePhotoSuccess(imageData.path));
        return imageData.path;
      })
      // TODO: Confirmation step - Retake photo?
      .then(imagePath => dispatch(processImage(imagePath)))
      .catch(error => dispatch(takePhotoError(error)));
  };

  _renderTakePicture = () => (
    <View style={styles.buttonOuter}>
      <View style={styles.buttonInner}></View>
    </View>
  );

  // _showLastImage = () => (
  //   <View>
  //     <Text>{ `Pic als String: ${String(this.state.pic)}` }</Text>
  //     <Image
  //       style={styles.image}
  //       source={{uri: this.state.pic}}
  //     />
  //   </View>
  // );

  render() {
    return (
      <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fit}
          captureTarget={Camera.constants.CaptureTarget.disk}
          type={Camera.constants.Type.back}
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
