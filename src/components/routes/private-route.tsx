import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router"
import { useTypeSelector } from "../hooks/useTypeSelector";

const PrivateRoute = ({ token,component: Component, ...rest }: any) => {



  return (
    <Route
      {...rest}
      render={props => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
      }
    />
  )
}

export default PrivateRoute