import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductAction, ProductActionType } from './types';
import { getProductsUrl } from '../config/config.json'
import { useQuery } from 'react-query';



const getProducts = () => {
  
  return async (dispatch: Dispatch<ProductAction>) => {
    
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