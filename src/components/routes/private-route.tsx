import { Redirect, Route } from "react-router"

const PrivateRoute = ({ isLoggedIn, ...props }: any): any => {
  return isLoggedIn
    ? <Route {...props} />
    : <Redirect to="/login" />
}

export default PrivateRoute