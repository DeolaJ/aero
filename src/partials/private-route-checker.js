import Router from 'next/router';
import PropTypes from 'prop-types';
import { useAuthState } from '../auth/index';

const PrivateRouteChecker = ({
  children,
}) => {
  const { user } = useAuthState;
  if (!user && typeof window !== 'undefined') {
    Router.replace('/');
    return null;
  }

  return (
    <>
      { children }
    </>
  );
};

PrivateRouteChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteChecker;
