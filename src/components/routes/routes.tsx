import React, { useEffect, useState } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { HomePage, CartPage, Orders, Login, RegistrationForm } from '../pages';
import PrivateRoute from './private-route';

const Routes = () => {
  const { token} = useTypeSelector(state => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState('')
  

  useEffect(() => {
    setIsLoggedIn(token)
  }, [token])
  
  return (
    <>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
      <Route path="/orders" component={Orders} />
      <Route path="/register" component={RegistrationForm} />
    </>
  )
}

export default Routes
