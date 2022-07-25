import '../styles/globals.css';

import { GoogleAnalytics } from 'nextjs-google-analytics';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
