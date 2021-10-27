import React from 'react';
import { Card} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Product } from '../../interfaces';

const StoreListItem = ({ product }:any): JSX.Element => {
  const { Meta } = Card;
  const {  title, description, image,price } = product as Product
  
  return (
    <Card hoverable
      style={{ width: "calc(100%/4)" }}
      cover={<img alt="example" src={image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={title} description={description} style={{marginBottom:'30px'}}/>
      <p className='price'>{price}$</p>
    </Card>
  )
}

export default StoreListItem
