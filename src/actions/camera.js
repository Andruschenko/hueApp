import {
  PROCESS_IMAGE_START,
  PROCESS_IMAGE_SUCCESS,
  PROCESS_IMAGE_ERROR,
  TAKE_PHOTO_SUCCESS,
} from '../constants/actionTypes';

export const processImageStart = () => ({
  type: PROCESS_IMAGE_START,
});

export const processImageSuccess = (pieces) => ({
  type: PROCESS_IMAGE_SUCCESS,
  pieces,
});

export const processImageError = (error) => ({
  type: PROCESS_IMAGE_ERROR,
  error,
});

export const takePhotoSuccess = (image) => ({
  type: TAKE_PHOTO_SUCCESS,
  image
});
