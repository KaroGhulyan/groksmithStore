import { Row } from 'antd';
import StoreListItem from '../store-list-item'
import Spinner from '../spinner/spinner';
import { Product } from '../../interfaces';
import ErrorIndicator from '../error-indicator';
import { useContext } from 'react';
import { StoreContext } from '../store-context';

interface StoreListInterface{
  isLoading:boolean,
  isError:boolean
  data:Product[]
}

const StoreList: React.FC<any> = (props) => {

  const { isLoading, isError,error, data: products } = props.products;

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <ErrorIndicator error={error}/>
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
