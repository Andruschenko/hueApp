import React, {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
// import theme from '../theme';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import api from '../api';
import { mapDispatchToProps } from '../util/redux';
import * as globalActions from '../actions/global';

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
});

class Photo extends React.Component {
  _takePicture = () => {
    this.camera.capture(data => {
      this.props.toggleLoading();
      /** get image from library and send
        request to api **/
      this.props.toggleLoading();
      this.props.changeTab(2);
    });
  }

  _renderTakePicture = () => (
    <View style={styles.buttonOuter}>
      <View style={styles.buttonInner}></View>
    </View>
  )

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
          <TouchableHighlight style={styles.button} onPress={this._takePicture}>
          { this._renderTakePicture()  }
          </TouchableHighlight>
        </View>
      </Camera>
    );
  }
}

export default connect(
  state => ({}),
  mapDispatchToProps(globalActions)
)(Photo);
