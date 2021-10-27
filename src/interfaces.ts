import { ProductActionType } from "./actions/types";

export interface Product {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}

export interface ProductState {
  products: Product[],
  loading: boolean;
  error: null | string
}

export interface GetProductsAction {
  type: ProductActionType.getProducts;
  payload: Product[]
}

export interface GetProductsSuccessAction {
  type: ProductActionType.getProductsSuccess;
  payload: any  
}
export interface GetProductsErrorAction {
  type: ProductActionType.getProductsError;
  payload: string
}

