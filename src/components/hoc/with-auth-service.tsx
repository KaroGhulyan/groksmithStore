import { FC } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Login } from '../pages';


const WithAuthService = (Component:FC) => {
  
  const AuthServiceComponent = ({ ...props }) => {
      
    const history = useHistory();

    // if (typeof window !== 'undefined') {
    //   const token = localStorage.getItem('token');

    //   if (!token) {
    //       history.push('/login');
    //     // return <Redirect to='/login'/>
    //     // return null;
    //   }
    // }
    return <Component {...props}/>;

  };

  return AuthServiceComponent;
};

export default WithAuthService;
