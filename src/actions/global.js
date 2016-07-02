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
  PIECES_TAB,
} from '../constants/tabs';

import { img2 } from '../mocks/image';

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

  return fetch(`${baseUrl}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Key': 'myAccessKey',  // use in future for safer requests
    },
    body: JSON.stringify({
      // image: img2, // uncomment this line to test with img2 (useful to test with simulator)
      image,

      // TODO: Send file as FormData
      // image: {
      //   uri: imagePath,
      //   type: 'image/jpeg',
      //   name: 'photo.jpg',
      // },

      device_id: 'send_device_id', // use in future
    })
  })
    // .then(checkResponseStatus)
    .then(response => response.json())
    .then(data => dispatch(updatePieces(data.pieces)))
    .then(() => dispatch(toggleLoading()))
    .then(() => dispatch(changeTab(PIECES_TAB)))
    .catch(err => console.log('error in requestPieces', err));

};

const retrieveImageFromStorage = imagePath => {

  // Throws file does not exist
  // TODO: Fix file-retrieval for Android by sending FormData in requestPieces

  return RNFS.readFile(imagePath, 'base64')
    .then(image => {
      console.log('image', image);
      // return image;
      return image;
    })
    .catch(err => console.error(err));
};

export const processImage = (imagePath) => {

  return dispatch => {
    dispatch(toggleLoading());
    return Promise.resolve()
      .then(() => retrieveImageFromStorage(imagePath))
      // dispatch API call action here
      .then(image => requestPieces(image, dispatch))
      .catch(err => console.log('error in processImage: ', err));
  };

};
