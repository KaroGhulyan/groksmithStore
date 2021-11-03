
import Header from '../header'
import { Container, Wrapper } from '../../style';
import Routes from '../routes/routes';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { WithStoreService } from '../hoc';
// import { ReactQueryDevtools } from 'react-query-devtools';

const _App = () => {
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
      return null;
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Container>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

const App = WithStoreService(_App)
export default App;
