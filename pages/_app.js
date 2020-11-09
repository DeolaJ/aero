/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'react-datetime/css/react-datetime.css';
import { AuthProvider } from '../src/auth';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default MyApp;
