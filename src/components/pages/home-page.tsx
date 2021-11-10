import React from 'react'
import { useProducts } from '../../hooks/products'
import StoreList from '../store-list'


const HomePage = (): JSX.Element => {
  const products = useProducts()
  return (
    <StoreList products={products}/>
  )
}
export default HomePage
