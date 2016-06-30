export const checkResponseStatus = (response) => {
  if (!(response.status >= 200 && response.status < 300)) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  } else {
    return response;
  }
};
