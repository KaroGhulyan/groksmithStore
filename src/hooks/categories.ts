import { Product } from '../interfaces';
import { useQuery, QueryClient } from "react-query";
import StoreService from "../services/store-service";


const storeService = new StoreService();

// const queryClient = new QueryClient() as any




export const useCategories = () => useQuery(['categories'], storeService.getCategories);
export const useCategory = (category: string) => useQuery(['categories', category], () => storeService.getCategory(category));


// export const useProduct = (productId: number) => useQuery(['product', productId], () => storeService.getProduct(productId), {
//   initialData: () => queryClient.getQueryData('products')?.find((product: Product) => product.id === productId)
// })






