import { GetProductsAction, GetProductsSuccessAction, GetProductsErrorAction, isLoggedInAction, getUserAction, GetUserErrorAction} from "../interfaces";

export enum ProductActionType {
  getProducts,
  getProductsSuccess,
  getProductsError
}
export enum UserActionType {
  isLoggedIn,
  getUser,
  getUserError
}

export type ProductAction = GetProductsAction | GetProductsSuccessAction | GetProductsErrorAction
export type UserAction = isLoggedInAction | getUserAction | GetUserErrorAction