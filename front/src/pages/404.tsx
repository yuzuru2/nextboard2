import React from 'react';
import Router from 'next/router';

const Error = () => {
  React.useEffect(() => {
    Router.push('/');
  }, []);

  return <div></div>;
};

export default Error;
