import Head from 'next/head';
import Router from 'next/router';
import { useAuthState } from '../src/auth/index';
import Nav from '../src/components/layout/nav';
import UserContent from '../src/components/layout/user-content';
import Footer from '../src/components/layout/footer';

const Dashboard = () => {
  const { user } = useAuthState;
  // if (!user && typeof window !== 'undefined') {
  //   Router.replace('/');
  //   return null;
  // }

  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>

      <main>
        <Nav />
        <UserContent
          user={user}
        />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
