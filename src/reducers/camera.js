import { combineReducers } from 'redux';

import {
  PROCESS_IMAGE_START,
  PROCESS_IMAGE_SUCCESS,
  PROCESS_IMAGE_ERROR,
  TAKE_PHOTO_SUCCESS,
  TAKE_PHOTO_ERROR,
} from '../constants/actionTypes';

/**
 * The path of the current image
 */
export const image = (state = '', action) => {
  switch (action.type) {
    case TAKE_PHOTO_SUCCESS:
      return action.image;
    case TAKE_PHOTO_ERROR:
      return '';
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
    case TAKE_PHOTO_ERROR:
      console.log('TAKE_PHOTO_ERROR', action.error);
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
