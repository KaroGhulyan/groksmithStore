import React from 'react'
import { HeaderWrapper, Nav, ShopCart } from './style'
import {
  ShoppingCartOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { Container } from '../../style';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useCategories } from '../../hooks/categories';
import {Redirect, useHistory} from 'react-router'

const Header = () => {
  const { Header, Content, Footer } = Layout;
  const { isLoading, isError, data: categoires } = useCategories()
  const history = useHistory()

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item onClick={() => history.push(`/`)}>All</Menu.Item>
        {
          categoires && categoires.map((category, index) => <Menu.Item key={index} onClick={() => history.push(`/products/${category}`)}>{category}</Menu.Item>)
        }
        {/* {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })} */}
      </Menu>
    </Header>
    // <HeaderWrapper>
    //   <Container>
    //     <Nav>
    //       <Link to={'/'}>
    //         <SmileOutlined style={{ fontSize: '2rem', color: 'green' }} />
    //       </Link>
    //       <ShopCart>
    //         <Badge count={5}>
    //           <ShoppingCartOutlined style={{ fontSize: '2rem' }} />
    //         </Badge>
    //       </ShopCart>
    //     </Nav>
    //   </Container>
    // </HeaderWrapper>
  )
}

export default Header
