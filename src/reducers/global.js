import {
  TOGGLE_LOADING,
  UPDATE_PROGRESS,
  CHANGE_TAB,
  UPDATE_PIECES,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  loadProgress: 0,
  tab: 1,
  pieces: {
    red: [],
    green: [],
    blue: [],
  },
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case UPDATE_PROGRESS:
      return {
        ...state,
        loadProgress: action.value,
      };

    case CHANGE_TAB:
      return {
        ...state,
        tab: action.index,
      };

    case UPDATE_PIECES:
      return {
        ...state,
        pieces: action.pieces,
      };

    default:
      return state;
  }
};
