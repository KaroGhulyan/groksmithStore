import { ProductActionType, UserActionType } from "./actions/types";
export interface SignIn {
  username:string,
  password:string
}

export interface Product {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}
export interface User {
  id: number,
  email: string,
  username: string,
  password: string,
  name: {
    firstname: string,
    lastname: string
  },
  address: {
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation: {
      lat: string,
      long: string
    }
  },
  phone: string
}

export interface ProductState {
  products: Product[],
  loading: boolean;
  error: null | string
}
export interface UserState {
  user: User | {},
  token: string;
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

export interface isLoggedInAction {
  type: UserActionType.isLoggedIn;
  payload: string
}
export interface getUserAction {
  type: UserActionType.getUser;
  payload: User
}
export interface GetUserErrorAction {
  type: UserActionType.getUserError;
  payload: string
}