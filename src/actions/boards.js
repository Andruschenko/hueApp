import { ADD_BOARD } from '../constants/actionTypes';

export const addBoard = board => ({
  type: ADD_BOARD,
  board
});
