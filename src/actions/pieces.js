import {
  UPDATE_PIECES,
} from '../constants/actionTypes';

export const updatePieces = pieces => {
  // console.log("pieces", pieces);
  return ({
    type: UPDATE_PIECES,
    pieces,
  })
};
