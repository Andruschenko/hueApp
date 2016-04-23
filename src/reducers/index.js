import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { pictures } from './pictures';
import { boards } from './boards';

const rootReducer = combineReducers({
  global: globalReducer,
  pictures,
  boards,
});

export default rootReducer;
