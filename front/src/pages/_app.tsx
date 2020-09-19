import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as gtag from 'src/lib/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
