import {
  TAKE_PHOTO_SUCCESS,
} from '../constants/actionTypes';

import { img2, img3 } from '../mocks/image';

const initialState = [
  // {
  //   date: '17th Nov. 1994',
  //   src: img2,
  // },
  // {
  //   date: '4th Mar. 1995',
  //   src: img3,
  // },
];

export const boards = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_PHOTO_SUCCESS:
      console.log('action.image', action.image);
      const d = new Date();
      const newBoard = {
        date: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`,
        src: `data:image/jpeg;base64,${action.image}`,
      };
      return [...state, newBoard];
    default:
      return state;
  }
};
