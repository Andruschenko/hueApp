import { baseUrl, localUrl } from '../api/config';
import { checkResponseStatus } from '../api/helpers';

import {
  TOGGLE_LOADING,
  // UPDATE_PROGRESS,
  CHANGE_TAB,
  UPDATE_PIECES,
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

export const updatePieces = pieces => {
  console.log("pieces", pieces);
  return ({
    type: UPDATE_PIECES,
    pieces,
  })
};

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

export const processImage = (image) => {

  return dispatch => {
    dispatch(toggleLoading());
    return Promise.resolve()
      // dispatch API call action here
      .then(() => requestPieces(image, dispatch))
      .catch(err => console.log('error in processImage: ', err));
  };

};
