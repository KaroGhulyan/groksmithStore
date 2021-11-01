import { Route, Switch } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { HomePage, CartPage, Orders, Login, RegistrationForm } from '../pages';
import PrivateRoute from './private-route';

const Routes = () => {
  const { token} = useTypeSelector(state => state.user);

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" token={token} component={HomePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/orders" component={Orders} />
      <Route path="/register" component={RegistrationForm} />
    </Switch>
  )
}

export default Routes
