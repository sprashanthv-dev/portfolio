import React from 'react';
import { AppProps } from 'next/app';
import Link from 'next/link';

import { seoConfig } from 'lib/constants';

import 'styles/theme.scss';
import 'styles/globals.css';

import { ThemeProvider } from '../context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <meta name="description" content={seoConfig.defaultDescription} />
      <meta name="keywords" content={seoConfig.defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,300;1,400&display=swap"
        as="font"
      ></Link>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
