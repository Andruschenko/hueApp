import {
  PROCESS_IMAGE_START,
  PROCESS_IMAGE_SUCCESS,
  PROCESS_IMAGE_ERROR,
} from '../constants/actionTypes';

export const processImageStart = () => ({
  type: PROCESS_IMAGE_START,
});

export const processImageSuccess = (data) => ({
  type: PROCESS_IMAGE_SUCCESS,
  data,
});

export const processImageError = (error) => ({
  type: PROCESS_IMAGE_ERROR,
  error,
});
