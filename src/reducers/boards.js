import {
  TAKE_PHOTO_SUCCESS,
  CREATE_BOARD,
} from '../constants/actionTypes';

import { img2, img3 } from '../mocks/image';

const initialState = [
  // {
  //   date: '17th Nov. 1994',
  //   src: img2,
  // },
  // {
  //   date: '4th Mar. 1995',
  //   src: '/storage/emulated/0/Pictures/IMG_20161204_041638.jpg',
  // },
];

export const boards = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const d = new Date();
      const newBoard = {
        id: action.id,
        date: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`,
        src: action.image,
      };
      return [...state, newBoard];
    default:
      return state;
  }
};
