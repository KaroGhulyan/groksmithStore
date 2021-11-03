import { useQuery } from "react-query";
import StoreService from "../services/store-service";


const storeService = new StoreService();

export const useProducts = () => useQuery(['products'], storeService.getProducts)
 





