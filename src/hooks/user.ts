import { Product } from '../interfaces';
import { useQuery, QueryClient } from "react-query";
import StoreService from "../services/store-service";

const storeService = new StoreService();

export const useUser = (id:number) => useQuery(['user',id],()=> storeService.getUser(id));
// export const useCategory = (category: string) => useQuery(['categories', category], () => storeService.getCategory(category));