import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router"
import { useTypeSelector } from "../hooks/useTypeSelector";

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  // Add your own authentication on the below line.
  const { token }: any = useTypeSelector(state => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    setIsLoggedIn(token)
  }, [token])

  console.log(isLoggedIn);

  return (
    <Route
      {...rest}
      render={props => {
        console.log(isLoggedIn, 'TOKEN');

        return isLoggedIn ? (
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