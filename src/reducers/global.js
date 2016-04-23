import * as types from '../actions/global';

const initialState = {
  isLoading: false,
  loadProgress: 0,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};
