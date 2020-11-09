import Head from 'next/head';
import Nav from '../src/components/layout/nav';
import Header from '../src/components/layout/header';
import AboutUs from '../src/components/layout/about-us';
import Booking from '../src/components/layout/booking';
import SearchSection from '../src/components/layout/search-section';
import HowItWorks from '../src/components/layout/how-it-works';
import TrustSection from '../src/components/layout/trust-section';
import Footer from '../src/components/layout/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aero</title>
      </Head>

      <main>
        <Nav />
        <Header />
        <Booking />
        <AboutUs />
        <SearchSection />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
