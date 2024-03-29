import React from 'react';
import { Helmet } from 'react-helmet';

import { seoConfig } from 'lib/constants';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import { LayoutProps } from '../../interfaces';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet title={seoConfig.defaultTitle} />
      <div className="relative my-0 mx-auto block py-0 px-4 max-w-4xl">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
