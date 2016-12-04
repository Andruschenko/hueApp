import { baseUrl, localUrl } from '../api/config';

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
  retrieveBase64ImageFromStorage,
  copyFileToPermanentStorage,
} from './storage';
import { createBoard } from './board';

import {
  PIECES_TAB,
} from '../constants/tabs';


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

const onProcessImageSuccess = (pieces, tab) => (
  dispatch => (
    Promise.resolve()
      .then(() => dispatch(processImageSuccess(pieces)))
      .then(() => dispatch(toggleLoading()))
      .then(() => dispatch(changeTab(tab)))
  )
);

const onProcessImageError = (error, tab) => (
  dispatch => (
    Promise.resolve()
      .then(() => dispatch(processImageError(error)))
      .then(() => dispatch(toggleLoading()))
      .then(() => dispatch(changeTab(tab)))
  )
);

export const processImage = (imagePath) => {
  return dispatch => {
    return Promise.resolve()
      .then(() => dispatch(processImageStart()))
      .then(() => dispatch(toggleLoading()))
      .then(() => retrieveBase64ImageFromStorage(imagePath))
      .then(image => requestPieces(image))
      .then(data => dispatch(onProcessImageSuccess(data.pieces, PIECES_TAB)))
      // 1. create board
      .then(() => dispatch(createBoard(imagePath)))
      // 2. save with that new id name to permanent storage
      // .then(() => copyFileToPermanentStorage(imagePath))
      .catch(error => dispatch(onProcessImageError(error, PIECES_TAB)));
  };
};
