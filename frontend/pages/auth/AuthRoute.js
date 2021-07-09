import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
const withAuth = (WrappedComponent) => {
  // const isAuth = useSelector((state) => state.Login.isAuthenticated);
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const accessToken = localStorage.getItem('jwt');

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace('/auth/login');
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
