import React from 'react'
import { useCategory } from '../../../hooks/categories'
import StoreList from '../../store-list'


interface Category {
  productType: string
}

const Category: React.FC<Category> = ({ productType}) => {
  
  const category = useCategory(productType);
  return (
    <StoreList products={category}/>
  )
}

export default Category
