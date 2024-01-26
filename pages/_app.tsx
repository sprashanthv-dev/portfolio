import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { seoConfig } from 'lib/constants';

import 'styles/main.scss';
import 'styles/globals.css';

import { ThemeProvider } from '../context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{seoConfig.defaultTitle}</title>
        <meta property="og:title" content={seoConfig.defaultTitle} />
        <meta name="description" content={seoConfig.defaultDescription} />
        <meta name="keywords" content={seoConfig.defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
