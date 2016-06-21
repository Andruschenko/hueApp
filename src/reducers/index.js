import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { pictures } from './pictures';
import { boards } from './boards';
// import { pieces } from './pieces';

const rootReducer = combineReducers({
  global: globalReducer,
  pictures,
  boards,
  // pieces,
});

export default rootReducer;
