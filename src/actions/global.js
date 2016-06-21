// import submitHandler from './../api/submitHandler';
import submit from '../api/submitHandler';

import { url } from '../api';

import {
  TOGGLE_LOADING,
  // UPDATE_PROGRESS,
  CHANGE_TAB,
  UPDATE_PIECES,
} from '../constants/actionTypes';

import {
  PIECES_TAB,
} from '../constants/tabs';

import { img4 } from '../mocks/image';

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

export const requestPieces = (image) => {

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error
    }
  };

  console.log('image in requestPieces', image);

  return dispatch => {
    fetch(`${url}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Access-Key': accessKey,
      },
      body: JSON.stringify({
        // image,
        img4,
      })
    })
      .then(checkStatus)
      .then(response => {
        console.log('the repsonse: ', response);
        return response.json()
      }).then(pieces => {
      console.log('pieces in returned json', pieces);
      dispatch(toggleLoading());
      dispatch(updatePieces(pieces));
      dispatch(changeTab(PIECES_TAB));
    }).catch(function(ex) {
      console.log('requestPieces - Parsing failed', ex)
    });
  };

};

// async action does not have constant action name and does not have reducer
export const processImage = (image) => {
  // console.log('image in sendImage action', image);
  // const pieces = [{'a': 1}, {'b': 2}];
  return dispatch => {
    dispatch(toggleLoading());
    return Promise.resolve()
      // dispatch API call action here
      .then(image => requestPieces(image))
      // .then(pieces => {
      //   console.log('pieces back in processImage:', pieces);
      //   dispatch(updatePieces(pieces));
      //
      //   // setTimeout(() => {
      //   //
      //   // }, 5000)
      // })
      .catch(err => console.log('error in processImage: ', err));
  };
};
