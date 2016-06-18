import submitHandler from './../api/submitHandler';

import {
  TOGGLE_LOADING,
  UPDATE_PROGRESS,
  CHANGE_TAB,
  UPDATE_PIECES,
} from '../constants/actionTypes';

import {
  PIECES_TAB,
} from '../constants/tabs';

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const updateProgress = (value) => ({
  type: UPDATE_PROGRESS,
  value,
});

export const changeTab = index => ({
  type: CHANGE_TAB,
  index,
});

// export const sendImage = (image) => ({
//   type: SEND_IMAGE,
//   image,
// })


export const updatePieces = pieces => {
  console.log("pieces", pieces);
  return ({
    type: UPDATE_PIECES,
    pieces,
  })
};

// async action does not have constant action name and does not have reducer
export const sendImage = (image) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading());
    //submitHandler(image)
    Promise.resolve()
      // dispatch API call action here
      .then(() => {})
      .then(pieces => {
        console.log(pieces);
        dispatch(updatePieces(pieces));
        setTimeout(() => {
          dispatch(toggleLoading());
          // Move to Pieces tab
          dispatch(changeTab(PIECES_TAB));
        }, 5000)
        })
        .catch(err => console.log('error in sendImage: ', err));
  }
};
