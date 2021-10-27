import { combineReducers } from 'redux';
import productsReducer from './products';

export const reducers = combineReducers({
  products: productsReducer
})

export type RootState = ReturnType<typeof reducers>