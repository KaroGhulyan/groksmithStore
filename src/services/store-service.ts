import axios from 'axios';
import { getProductsUrl } from '../config/config.json'

export default class StoreService {
  getProducts = () => {
    return async () => {
      const response = await axios.get(getProductsUrl);
      return response.data
    }
  }
}