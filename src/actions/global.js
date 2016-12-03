import { baseUrl, localUrl } from '../api/config';
// import { checkResponseStatus } from '../api/helpers';

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

export const changeTab = index => ({
  type: CHANGE_TAB,
  index,
});

const requestPieces = (photo, dispatch) => {

  // const image = photo;
  // const image = img2;
  const image = oneRed;

  return Promise.resolve()
    .then(() => fetch(`${baseUrl}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Access-Key': 'myAccessKey',  // use in future for safer requests
      },
      body: JSON.stringify({
        image,
        // device_id: ' send_device_id', // use in future to store images
      })
    }))
    // .then(checkResponseStatus)
    .then(response => { console.log('response', response); return response.json(); })
    .then(data => dispatch(processImageSuccess(data.pieces)))
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
      // .then(() => retrieveImageFromStorage(imagePath))
      .then(image => requestPieces(image, dispatch))
      .catch(error => console.log('error in processImage', error));
  };
};
