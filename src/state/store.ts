import { reducer as peopleSlice } from './people.slice';
import { reducer as planetsSlice } from './planets.slice';
import { reducer as starshipsSlice } from './starships.slice';
import {
  combineReducers,
  configureStore,
  // eslint-disable-next-line import/named
  PreloadedState,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  people: peopleSlice,
  planets: planetsSlice,
  starships: starshipsSlice,
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
