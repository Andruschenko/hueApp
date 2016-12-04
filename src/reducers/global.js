import {
  TOGGLE_LOADING,
  UPDATE_PROGRESS,
  CHANGE_TAB,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  loadProgress: 0,
  tab: 1,
  deviceId: '',
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

    default:
      return state;
  }
};
