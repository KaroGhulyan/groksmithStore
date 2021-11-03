export interface SignIn {
  username: string,
  password: string
}
export interface Token {
  token: string
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

