import * as images from '../mocks/image';

import {
  ADD_BOARD,
} from '../constants/actionTypes';

const initialState = [
  // {
  //   date: '17th Nov. 1994',
  //   src: images.img2,
  // },
  // {
  //   date: '4th Mar. 1995',
  //   src: images.img3,
  // },
];

export const boards = (state = initialState, action) => {
  switch (action.type) {

    case ADD_BOARD:
      const d = new Date();
      const newBoard = {
        date: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`,
        src: `data:image/jpeg;base64,${action.board}`,
      };
      return [...state, newBoard];
    default:
      return state;
  }
};
