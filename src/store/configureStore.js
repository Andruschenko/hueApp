import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const devTools = (__DEV__ && global.reduxNativeDevTools) || (() => noop => noop);
import reducer from '../reducers';


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      devTools(),
    )
  );

  return store;
};
