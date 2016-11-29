import { baseUrl, localUrl } from '../api/config';
// import { checkResponseStatus } from '../api/helpers';

import { updatePieces } from './pieces';

import RNFS from 'react-native-fs';

import {
  TOGGLE_LOADING,
  // UPDATE_PROGRESS,
  CHANGE_TAB,
} from '../constants/actionTypes';

import {
  processImageStart,
  processImageSuccess,
  processImageError,
} from './camera';

import {
  PIECES_TAB,
} from '../constants/tabs';

import { img2 } from '../mocks/image';
import { oneRed } from '../mocks/one-red';

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

// export const updateProgress = (value) => ({
//   type: UPDATE_PROGRESS,
//   value,
// });

export const changeTab = index => ({
  type: CHANGE_TAB,
  index,
});

const requestPieces = (image, dispatch) => {

  return Promise.resolve()
    .then(() => dispatch())
    .then(() => fetch(`${baseUrl}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Key': 'myAccessKey',  // use in future for safer requests
      },
      body: JSON.stringify({
        // image: img2, // uncomment this line to test with img2 (useful to test with simulator)
        image: oneRed, // uncomment this line to test with img2 (useful to test with simulator)
        // image,

        // TODO: Send file as FormData
        // image: {
        //   uri: imagePath,
        //   type: 'image/jpeg',
        //   name: 'photo.jpg',
        // },

        device_id: 'send_device_id', // use in future
      })
    }))
    // .then(checkResponseStatus)
    .then(response => response.json())
    // TODO: Debug JSON response
    .then(data => dispatch(updatePieces(data.pieces)))
    .then(() => dispatch(toggleLoading()))
    .then(() => dispatch(changeTab(PIECES_TAB)))
    .catch(error => console.log('error in requestPieces', error));
};

const retrieveImageFromStorage = imagePath => {

  // Throws file does not exist
  // TODO: Fix file-retrieval for Android by sending FormData in requestPieces

  return RNFS.readFile(imagePath, 'base64')
    .then(image => {
      console.log('image', image);
      return image;
    })
    .catch(err => console.error(err));
};

export const processImage = (imagePath) => {

  return dispatch => {
    return Promise.resolve()
      .then(() => dispatch(processImageStart()))
      .then(() => dispatch(toggleLoading()))
      .then(() => retrieveImageFromStorage(imagePath))
      .then(image => requestPieces(image, dispatch))
      .then(() => dispatch(processImageSuccess()))    // TODO: Add image as output
      .catch(error => dispatch(processImageError(error)));
  };
};
