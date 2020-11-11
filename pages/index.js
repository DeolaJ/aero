import Head from 'next/head';
import Body from '../src/components/layout/body';
import Header from '../src/components/layout/header';
import AboutUs from '../src/components/layout/about-us';
import PopularDeals from '../src/components/layout/popular-deals';
import Booking from '../src/components/layout/booking';
// import HowItWorks from '../src/components/layout/how-it-works';
import TrustSection from '../src/components/layout/trust-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aero</title>
      </Head>

      <Body>
        <Header />
        <Booking />
        <PopularDeals />
        <AboutUs />
        {/* <HowItWorks /> */}
        <TrustSection />
      </Body>
    </>
  );
}
