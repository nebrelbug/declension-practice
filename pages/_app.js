import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
