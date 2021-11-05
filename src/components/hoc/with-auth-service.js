import { Redirect, useHistory } from 'react-router';
import { Login } from '../pages';


const withAuthService = (WrappedComponent) => {
  
  const AuthServiceComponent = ({ ...props }) => {
    const history = useHistory();

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
          history.push('/login');
        // return <Redirect to='/login'/>
        // return null;
      }
    }
    return <WrappedComponent {...props}/>;

  };

  return AuthServiceComponent;
};

export default withAuthService;
