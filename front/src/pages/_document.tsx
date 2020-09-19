import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/*  OGP  */}
          <meta property="fb:app_id" content="2506961392954915" />
          <meta property="og:url" content="https://board.itsumen.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="いつめん掲示板" />
          <meta property="og:description" content="しょぼい掲示板です。" />
          <meta property="og:site_name" content="いつめん掲示板" />
          <meta
            property="og:image"
            content="https://board.itsumen.com/favicon.ico"
          />

          {/* favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="180x180"
          />
          <link
            rel="icon"
            type="image/png"
            href="/android-touch-icon.png"
            sizes="192x192"
          />

          {/*  font-awesome  */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          {/* 自作CSS  */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname + window.location.search,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
