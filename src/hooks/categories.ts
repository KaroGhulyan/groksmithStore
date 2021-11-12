import { Product } from '../interfaces';
import { useQuery, QueryClient } from "react-query";
import StoreService from "../services/store-service";

const storeService = new StoreService();

export const useCategories = () => useQuery(['categories'], storeService.getCategories);
export const useCategory = (category: string) => useQuery(['categories', category], () => storeService.getCategory(category));






