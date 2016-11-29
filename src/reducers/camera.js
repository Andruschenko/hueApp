import { combineReducers } from 'redux';

import {
  PROCESS_IMAGE_START,
  PROCESS_IMAGE_SUCCESS,
  PROCESS_IMAGE_ERROR,
} from '../constants/actionTypes';

export const image = (state = null, action) => {
  switch (action.type) {
    case PROCESS_IMAGE_SUCCESS:
      // return action.image;
      return 'this should be the returned base64 image';
    case PROCESS_IMAGE_START:
    case PROCESS_IMAGE_ERROR:
      return null;
    default:
      return state;
  }
};

export const isProcessing = (state = false, action) => {
  switch (action.type) {
    case PROCESS_IMAGE_START:
      return true;
    case PROCESS_IMAGE_SUCCESS:
    case PROCESS_IMAGE_ERROR:
      return false;
    default:
      return state;
  }
};

export const error = (state = false, action) => {
  switch (action.type) {
    case PROCESS_IMAGE_SUCCESS:
      return false;
    case PROCESS_IMAGE_ERROR:
      console.log('PROCESS_IMAGE_ERROR', action.error);
      return true;
    default:
      return state;
  }
};

const camera = combineReducers({
  image,
  isProcessing,
  error,
});

export default camera;
