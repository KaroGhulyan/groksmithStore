import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage, Orders, Login, RegistrationForm } from '../pages';
import PrivateRoute from './private-route';

const Routes = () => {
  const token = true
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

export default Routes
