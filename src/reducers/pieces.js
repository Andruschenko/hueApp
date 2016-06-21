const initialState = {
  red: [
    {
      base64: '',
      startx: 0,
      starty: 0,
      endx: 0,
      endy: 0,
    },
  ],
  green: [
    {
      base64: '',
      startx: 0,
      starty: 0,
      endx: 0,
      endy: 0,
    },
  ],
  blue: [
    {
      base64: '',
      startx: 0,
      starty: 0,
      endx: 0,
      endy: 0,
    },
  ],
};

export const pieces = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
