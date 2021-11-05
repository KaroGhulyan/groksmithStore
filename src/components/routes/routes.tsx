import { Route, Switch } from 'react-router-dom';
import { withAuthService, WithStoreService } from '../hoc';
import { HomePage, CartPage, Orders, Login, RegistrationForm } from '../pages';

const RoutesWrapper = () => {

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={HomePage} exact/>
      <Route path="/cart" component={CartPage} />
      <Route path="/orders" component={Orders} />
      <Route path="/register" component={RegistrationForm} />
    </Switch>
  )
  
}

const Routes = WithStoreService(RoutesWrapper);


export default Routes
