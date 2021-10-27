
import { useEffect, useState } from 'react';
import Header from '../header'
import { Container, Wrapper } from '../../style';
import Routes from '../routes/routes';

const App = () => {
  const token = false

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
