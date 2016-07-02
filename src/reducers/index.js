import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { boards } from './boards';
import { pieces } from './pieces';

const rootReducer = combineReducers({
  global: globalReducer,
  boards,
  pieces,
});

export default rootReducer;
