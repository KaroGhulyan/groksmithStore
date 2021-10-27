import { GetProductsAction, GetProductsSuccessAction, GetProductsErrorAction } from "../interfaces";

export enum ProductActionType {
  getProducts,
  getProductsSuccess,
  getProductsError

}

export type Action = GetProductsAction | GetProductsSuccessAction | GetProductsErrorAction