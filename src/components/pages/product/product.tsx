import React from 'react'
import { useParams } from 'react-router';
import { Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useProduct } from '../../../hooks/products'
// import { Product } from '../../../interfaces';
import { ContentWrapper } from '../../../style'
import ErrorIndicator from '../../error-indicator';
import Spinner from '../../spinner/spinner';

// interface ProductService {
//   isLoading:boolean,
//   isError:boolean,
//   error:string,
//   data:Product[]
// }

const Product = () => {

  let { id }: any = useParams();
  const { isLoading, isError, error, data }: any = useProduct(id);
  
  
  if (isLoading) {
    return <Spinner />
  }
  
  if(isError){
    return <span>{error}</span>
  }

  return (
    <ContentWrapper>
        <Card hoverable
          style={{ width: "calc(100%/4)" }}
          cover={<img alt="example" src={data.image} />}
          actions={[
            <PlusCircleOutlined  key="add" onClick={()=>console.log(123)}/>,
          ]}
        >
          <Meta title={data.title} description={data.description} style={{ marginBottom: '30px' }} />
          <p className='price'>{data.price}$</p>
        </Card>
    </ContentWrapper>
  )
}

export default Product
