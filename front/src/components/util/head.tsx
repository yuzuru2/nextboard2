import * as React from 'react';
import Head from 'next/head';

export default (params?: { noindex?: boolean; title?: string }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          いつめん掲示板
          {params?.title ? ` | ${params.title}` : ''}
        </title>
        {params?.noindex ? <meta name="robots" content="noindex" /> : ''}
      </Head>
    </>
  );
};
