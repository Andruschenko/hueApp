import * as images from '../mocks/image';

const initialState = [
  {
    date: '17th Nov. 1994',
    src: images.img2,
  },
  {
    date: '4th Mar. 1995',
    src: images.img3,
  },
  {
    date: '83rd Feb. 1996',
    src: images.img4,
  },
  {
    date: '18th Dec. 1996',
    src: images.img5,
  },
];

export const boards = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
