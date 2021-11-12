import React, { useContext } from 'react'
import { HeaderWrapper, Nav, ShopCart, MenuWrapper } from './style'
import {
  ShoppingCartOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { Container } from '../../style';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useCategories } from '../../hooks/categories';
import { Redirect, useHistory } from 'react-router'
import { StoreContext } from '../store-context';

const Header = () => {
  const { Header } = Layout;
  const { isLoading, isError, data: categoires } = useCategories()
  const { user} = useContext(StoreContext);
  // const {name} = user?.data
  console.log(user.data);
  
  const history = useHistory()


  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} defaultOpenKeys={['0']} style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <SmileOutlined style={{ fontSize: '1.5rem', color: 'white'  }}/> */}
        <Menu.Item key={'0'} onClick={() => history.push(`/`)}>All</Menu.Item>
        {
          categoires && categoires.map((category, index) => <Menu.Item key={index + 1} onClick={() => history.push(`/products/${category}`)}>{category}</Menu.Item>)
        }
        {user && (
          <>
            <Menu.Item>
             <span style={{fontWeight:'bold',textTransform:'uppercase'}}>{user.data.name.firstname}</span>
            </Menu.Item>
            <Menu.Item>
              <ShopCart>
                <Badge count={5}>
                  <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: 'white' }} />
                </Badge>
              </ShopCart>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  )
}

export default Header
