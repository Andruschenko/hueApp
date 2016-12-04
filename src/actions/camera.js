import {
  PROCESS_IMAGE_START,
  PROCESS_IMAGE_SUCCESS,
  PROCESS_IMAGE_ERROR,
  TAKE_PHOTO_SUCCESS,
  TAKE_PHOTO_ERROR,
} from '../constants/actionTypes';

import { getRealImagePath } from './storage';

export const processImageStart = () => ({
  type: PROCESS_IMAGE_START,
});

export const processImageSuccess = pieces => ({
  type: PROCESS_IMAGE_SUCCESS,
  pieces,
});

export const processImageError = error => ({
  type: PROCESS_IMAGE_ERROR,
  error,
});

export const takePhotoSuccess = imagePath => ({
  type: TAKE_PHOTO_SUCCESS,
  image: getRealImagePath(imagePath),
});

export const takePhotoError = error => ({
  type: TAKE_PHOTO_ERROR,
  error,
});

