import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import 'styles/main.scss';
import { ThemeProvider } from '../context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta property="og:title" content={defaultTitle} />
        <meta name="description" content={defaultDescription} />
        <meta name="keywords" content={defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
