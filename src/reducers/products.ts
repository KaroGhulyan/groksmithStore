import { ProductState } from './../interfaces';
import { ProductAction, ProductActionType } from '../actions/types';

const initialState: ProductState = {
  products: [],
  loading: true,
  error:null,
}

const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionType.getProducts:
      return {
        products: [],
        loading: true,
        error:null
      }
    case ProductActionType.getProductsSuccess:
      return {
        products: action.payload,
        loading: false,
        error: null
      }
    case ProductActionType.getProductsError:
      return {
        products: [],
        loading: false,
        error: action.payload
      }
  }
  return state;
}

export default productsReducer