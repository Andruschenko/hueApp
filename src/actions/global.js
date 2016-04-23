export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const updateProgress = (value) => ({
  type: UPDATE_PROGRESS,
  value,
});
