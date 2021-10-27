import axios from 'axios';
import { Dispatch } from 'redux';
import { Action, ProductActionType } from './types';
import { getProductsUrl } from '../config/config.json'
import { Product } from '../interfaces';





const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {

      dispatch({ type: ProductActionType.getProducts, payload: [] })
      const response = await axios.get(getProductsUrl);

      dispatch({
        type: ProductActionType.getProductsSuccess,
        payload: response.data
      })

    } catch (error) {
      dispatch({ type: ProductActionType.getProductsError, payload: 'Error' })
    }

  }
}
export {
  getProducts
}