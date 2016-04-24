import submitHandler from './../api/submitHandler';

export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const updateProgress = (value) => ({
  type: UPDATE_PROGRESS,
  value,
});

export const CHANGE_TAB = 'CHANGE_TAB';
export const changeTab = index => ({
  type: CHANGE_TAB,
  index,
});

export const SEND_IMAGE = 'SEND_IMAGE';
// export const sendImage = (image) => ({
//   type: SEND_IMAGE,
//   image,
// })

export const UPDATE_PIECES = 'UPDATE_PIECES';
export const updatePieces = pieces => ({
  type: UPDATE_PIECES,
  pieces,
})

export const sendImage = (image) => {
  return (dispatch, getState) => {
    submitHandler(image)
      .then(pieces => dispatch(updatePieces(pieces)))
  }
};
