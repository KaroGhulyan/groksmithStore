// import { useRouter } from 'next/router';
// import { useCookies } from 'react-cookie';
// import { useHistory } from 'react-router';

// const withAuth = (WrappedComponent) => {
//   let history = useHistory();
//   return (props) => {
//     if (typeof window !== 'undefined') {
//       const token = localStorage.getItem('token');
//       console.log(token)
//       if (!token) {
//         history.push('/login');
//         return null;
//       }
//     }
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
