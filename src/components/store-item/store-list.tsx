import { Row } from 'antd';
import StoreListItem from '../store-list-item'
import Spinner from '../spinner/spinner';
import { Product } from '../../interfaces';
import ErrorIndicator from '../error-indicator';
import { useContext } from 'react';
import { StoreContext } from '../store-context';

const StoreList = (): JSX.Element => {

  const { products:{ isLoading, error, data: products } } = useContext(StoreContext);
  
  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorIndicator />
  }

  return (
    <div className="site-card-wrapper">
      <Row gutter={[26, 26]}>
        {
          products && products.map((product: Product) => {
            return (
              <StoreListItem key={product.id} product={product} />
            )
          })
        }
      </Row>
    </div>
  )
}

export default StoreList
