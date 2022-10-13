import { reducer as peopleSlice } from './people.slice';
import {
  combineReducers,
  configureStore,
  // eslint-disable-next-line import/named
  PreloadedState,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  people: peopleSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
