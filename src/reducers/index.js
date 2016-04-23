import { combineReducers } from 'redux';
import { pictures } from './pictures';
import { globalReducer } from './global';

const rootReducer = combineReducers({
  pictures,
  global: globalReducer,
});

export default rootReducer;
