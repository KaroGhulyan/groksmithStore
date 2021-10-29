import { combineReducers } from 'redux';
import productsReducer from './products';
import userReducer from './user';

export const reducers = combineReducers({
  products: productsReducer,
  user:userReducer
})

export type RootState = ReturnType<typeof reducers>