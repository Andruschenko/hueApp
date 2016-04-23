import image from '../mocks/image';

const initialState = [
  {
    date: '17th Nov. 1994',
    src: image,
  },
  {
    date: '4th Mar. 1995',
    src: image,
  },
  {
    date: '83rd Feb. 1996',
    src: image,
  },
  {
    date: '18th Dec. 1996',
    src: image,
  },
];

export const boards = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
