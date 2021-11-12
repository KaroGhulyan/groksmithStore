import React from 'react';
import { Card } from 'antd';
import { Product } from '../../interfaces';
import { useHistory } from 'react-router';

interface StoreListItemProps {
  product: Product
}

const StoreListItem: React.FC<StoreListItemProps> = (props) => {

  const { Meta } = Card;
  const { title, image, price, id } = props.product
  const history = useHistory()

  return (
    <Card onClick={() => history.push(`/product/${id}`)} hoverable
      style={{ width: "calc(100%/4)" }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={title} style={{ marginBottom: '30px' }} />
      <p className='price'>{price}$</p>
    </Card>
  )
}

export default StoreListItem
