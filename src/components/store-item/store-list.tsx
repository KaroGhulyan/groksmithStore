import React, { useEffect } from 'react'
import { Row } from 'antd';
import StoreListItem from '../store-list-item'
import { Product } from '../../interfaces';
import Spinner from '../spinner/spinner';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useAction';


const StoreList = (): JSX.Element => {

  const { products, loading, error } = useTypeSelector(state => state.products);

  const { getProducts } = useActions()

  useEffect(() => {
    getProducts()
  }, [])


  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <h1>Error</h1>
  }
  return (
    <div className="site-card-wrapper">
      <Row gutter={[26, 26]}>
        {
          products.map(product => {

            return (
              <StoreListItem key={product.id} product={product}/>
            )
          })
        }
      </Row>
    </div>
  )
}



export default StoreList
