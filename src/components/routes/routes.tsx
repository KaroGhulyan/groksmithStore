import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom';
import { HomePage, CartPage, Orders, Login } from '../pages';
import PrivateRoute from './private-route';

const Routes = () => {
  const token = false
  return (
    <Switch>
      <PrivateRoute isLoggedIn={token} path="/" component={HomePage} exact />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={CartPage} />
      <Route path="/orders" component={Orders} />
    </Switch>
  )
}

export default Routes
