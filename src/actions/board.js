import { v1 } from 'uuid';

import { CREATE_BOARD } from '../constants/actionTypes';

export const createBoard = image => ({
  type: CREATE_BOARD,
  id: v1(),
  image,
});
