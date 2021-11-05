import axios from 'axios';
import { getProductsUrl, signInUrl } from '../config/config.json';
import { Product, Token, SignIn } from '../interfaces';


export default class StoreService {


  getProducts = async () => {
    const response = await axios.get<Product[]>(getProductsUrl);
    return response?.data;
  };

  signIn = async (data: any) => {
      const response = await axios.post<Token>(signInUrl, data);
      const token = response?.data?.token;
      localStorage.setItem('token', token);
      return token

  }
}