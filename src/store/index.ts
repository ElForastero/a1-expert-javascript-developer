import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import manufacturers from './manufacturers';
import colors from './colors';
import cars from './cars';
import car from './car';

const rootReducer = combineReducers({
  manufacturers,
  colors,
  cars,
  car,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
// @todo think on this type
export type PaginatableRoute = 'catalog';
export type PaginatableType = 'cars';
