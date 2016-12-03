import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import Pieces from '../components/Pieces';
import { piecesInitialState } from '../reducers/pieces';

const mapStateToProps = ({ pieces, boards, camera }) => {
  return ({
    pieces,
    boards,
    camera,
  });
};

class PiecesContainer extends Component {
  static propTypes = {
    pieces: PropTypes.object,
    boards: PropTypes.array,
    camera: PropTypes.object,
  };

  _renderEmpty = () => {
    const { pieces, boards, camera } = this.props;
    let title = 'An unknown error occurred';
    let message = '';

    if (pieces !== piecesInitialState) {
      return null;
    }
    if (boards.length === 0) {
      title = 'Start by taking your first picture!';
      message = 'Let us analyze your image to find circled pieces';
    }
    else if (camera.error) {
      title = 'Error while processing image';
      message = 'Image retrieval failed - A server error?';
    }
    else if (!camera.image) {
      title = 'Nothing to show yet!';
      message = 'Please take a picture first and find your pieces here.';
    }
    else if (pieces === piecesInitialState) {
      title = 'No pieces found in image';
      message = 'Our analysis did not find any circles in your image.';
    }

    return (
      <View style={styles.emptyMessageContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{message}</Text>
      </View>
    )
  };

  render() {
    const { pieces: { red, green, blue } } = this.props;
    return (
      <Pieces
        red={red}
        green={green}
        blue={blue}
        renderEmpty={this._renderEmpty() ? this._renderEmpty : null}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(PiecesContainer);

const styles = StyleSheet.create({
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 22,
  },
  subText: {
    fontSize: 16,
    padding: 20,
    textAlign: 'center',
  },
});
