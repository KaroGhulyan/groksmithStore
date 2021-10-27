import React from 'react'
import { HeaderWrapper, Nav, ShopCart } from './style'
import {
  ShoppingCartOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { Container } from '../../style';
import { Badge } from 'antd';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <SmileOutlined style={{ fontSize: '2rem', color: 'green' }} />
          <ShopCart>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: '2rem' }} />
            </Badge>
          </ShopCart>
        </Nav>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
