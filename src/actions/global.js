import { baseUrl, localUrl } from '../api/config';

import fs from 'react-native-fs';
import DeviceInfo from 'react-native-device-info'

import {
  TOGGLE_LOADING,
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

const requestPieces = (image) => {
  if (!image) return null;
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
        device_id: DeviceInfo.getDeviceId(), // store images/pieces per device in database
      })
    }))
    .then(response => response.json())
};

const retrieveBase64ImageFromStorage = imagePath => {
  const matches = imagePath.match(/^file:\/{2}(.+\.jpg)$/);

  console.log('stat(imagePath)', fs.stat(matches[1]));
  // console.log('iOS: MainBundlePath', fs.MainBundlePath);
  // console.log('Android: DocumentDirectoryPath', fs.DocumentDirectoryPath);
  // console.log('CachesDirectoryPath', fs.CachesDirectoryPath);
  // console.log('PicturesDirectoryPath', fs.PicturesDirectoryPath);

  if (matches[1] && fs.exists(matches[1])) {
    return Promise.resolve()
      .then(() => fs.readFile(matches[1], 'base64'))
      .then(image => `data:image/jpeg;base64,${image}`)
      .catch(err => console.error(err));
  } else {
    return oneRed || img2;
  }
};

const onProcessImageSuccess = (pieces, tab) => (
  dispatch => (
    Promise.resolve()
      .then(() => dispatch(processImageSuccess(pieces)))
      .then(() => dispatch(toggleLoading()))
      .then(() => dispatch(changeTab(tab)))
  )
);

const onProcessImageError = (error) => (
  dispatch => (
    Promise.resolve()
      .then(() => dispatch(processImageError(error)))
      .then(() => dispatch(toggleLoading()))
  )
);

export const processImage = (imagePath) => {
  return dispatch => {
    return Promise.resolve()
      .then(() => dispatch(processImageStart()))
      .then(() => dispatch(toggleLoading()))
      .then(() => retrieveBase64ImageFromStorage(imagePath))
      .then(image => requestPieces(image))
      // .then(data => dispatch(processImageSuccess(data.pieces)))
      .then(data => dispatch(onProcessImageSuccess(data.pieces, PIECES_TAB)))
      // .catch(error => dispatch(processImageError(error)));
      .catch(error => dispatch(onProcessImageError(error)));
  };
};
