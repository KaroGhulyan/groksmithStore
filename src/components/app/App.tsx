import Header from '../header';
import { Container, Wrapper } from '../../style';
import Routes from '../routes/routes';
import { WithAuthService, WithStoreService } from '../hoc';

const AppWrapper = () => {
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

const App = WithAuthService(WithStoreService(AppWrapper));

export default App;
