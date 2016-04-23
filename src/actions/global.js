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
