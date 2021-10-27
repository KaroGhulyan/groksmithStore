import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 30px;
  box-shadow: 0px 15px 10px -15px #111;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopCart = styled.div`
  cursor: pointer;
`;
