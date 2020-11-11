import Head from 'next/head';
// import Router from 'next/router';
import { useAuthState } from '../src/auth/index';
import UserContent from '../src/components/layout/user-content';
import Body from '../src/components/layout/body';

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

      <Body>
        <UserContent
          user={user}
        />
      </Body>
    </>
  );
};

export default Dashboard;
