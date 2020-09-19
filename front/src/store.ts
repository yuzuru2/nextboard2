import {
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// reducer
import home_slice from 'src/reducers/home';
import talk_slice from 'src/reducers/talk';

export const initializeStore = (state: any) => {
  return createStore(
    combineReducers({
      home: home_slice.reducer,
      talk: talk_slice.reducer,
    }),
    state,
    applyMiddleware(...[thunk])
  );
};
