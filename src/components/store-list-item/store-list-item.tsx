import React from 'react';
import { Card} from 'antd';
import { Product } from '../../interfaces';
import { Redirect, useHistory } from 'react-router';

const StoreListItem = ({product}:any): JSX.Element => {
  // console.log(product);
  
  const { Meta } = Card;
  const {  title, description, image,price,id } = product
  const history = useHistory()
  
  return (
    <Card onClick={()=>history.push(`/product/${id}`)} hoverable
      style={{ width: "calc(100%/4)" }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={title} style={{marginBottom:'30px'}}/>
      <p className='price'>{price}$</p>
    </Card>
  )
}

export default StoreListItem
