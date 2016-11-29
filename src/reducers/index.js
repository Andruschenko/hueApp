import { combineReducers } from 'redux';

import { globalReducer } from './global';
import { boards } from './boards';
import camera from './camera';
import { pieces } from './pieces';

const rootReducer = combineReducers({
  global: globalReducer,
  boards,
  pieces,
  camera,
});

export default rootReducer;
