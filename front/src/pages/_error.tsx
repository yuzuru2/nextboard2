import React from 'react';
import Router from 'next/router';
import { NextPageContext } from 'next';

const Error = () => {
  React.useEffect(() => {
    Router.push('/');
  }, []);

  return <div></div>;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  if (process.browser) {
    location.href = '/';
    return;
  }

  if (res) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }
};

export default Error;
