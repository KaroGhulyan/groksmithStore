import axios from 'axios';
import { getProductsUrl, signInUrl, getCategories, getCategory } from '../config/config.json';
import { Product, Token } from '../interfaces';
export default class StoreService {

  getCategories = async () => {
    const { data } = await axios.get<String[]>(getCategories);
    return data;
  };
  getCategory = async (category: any) => {
    const { data } = await axios.get<Product[]>(`${getCategory}/${category}`)
    return data
  }
  getProducts = async () => {
    const { data } = await axios.get<Product[]>(getProductsUrl);
    return data;
  };
  getProduct = async (id: number) => {
    const { data } = await axios.get<Product>(`${getProductsUrl}/${id}`);
    return data;
  };

  signIn = async (data: any) => {
    const response = await axios.post<Token>(signInUrl, data);
    const token = response?.data?.token;
    localStorage.setItem('token', token);
    return token
  }
}