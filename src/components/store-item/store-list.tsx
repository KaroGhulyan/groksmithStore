import { Row } from 'antd';
import StoreListItem from '../store-list-item'
import Spinner from '../spinner/spinner';
import { WithStoreService } from '../hoc';
import { useQuery } from 'react-query';
import { Product } from '../../interfaces';
import StoreService from '../../services/store-service';
import ErrorIndicator from '../error-indicator';
import { useProducts } from '../../hooks/products';

interface StoreListProps {
  data: Product[],
  isLoading:any,
  
}

const StoreList = (): JSX.Element => {

  const { isLoading, error, data: products} = useProducts()

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
         products && products.map((product) => {
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
