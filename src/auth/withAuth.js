import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const withAuth = (Component) => {
  const FuncComponent = ({ children, ...props }) => {
    const { user } = props;

    useEffect(() => {
      if (!user) {
        Router.replace('/');
      }
    });

    // eslint-disable-next-line react/jsx-props-no-spreading
    return (<Component {...props}>{children}</Component>);
  };

  FuncComponent.getInitialProps = async (ctx) => {
    // If Page/Component has a `getInitialProps`, we should call it.
    const props = Component.getInitialProps && await Component.getInitialProps(ctx);

    if (ctx && ctx.req && typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const user = localStorage.getItem('user');
      if (user) {
        return { ...props, user, token: user.token };
      }
    }
    return { ...props, user: null };
  };

  FuncComponent.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.objectOf(
      PropTypes.any,
    ).isRequired,
  };

  return FuncComponent;
};

export default withAuth;
