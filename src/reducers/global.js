import * as types from '../actions/global';

const initialState = {
  isLoading: false,
  loadProgress: 0,
  tab: 1,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case types.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.value,
      };

    case types.CHANGE_TAB:
      return {
        ...state,
        tab: action.index,
      };

    default:
      return state;
  }
};
