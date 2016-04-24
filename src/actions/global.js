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

// export const sendImage = (image) => ({
//   type: SEND_IMAGE,
//   image,
// })

export const UPDATE_PIECES = 'UPDATE_PIECES';
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
    Promise.resolve("asdjf")
      .then(pieces => {
        console.log(pieces);
        dispatch(updatePieces(pieces));
        setTimeout(() => {
          dispatch(toggleLoading());
          dispatch(changeTab(2));
        }, 5000)
        })
        .catch(err => console.log('error in sendImage: ', err));
  }
};
