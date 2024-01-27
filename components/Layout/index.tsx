import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutProps } from '../../interfaces';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet title="Portfolio" />
      <div className="relative my-0 mx-auto block py-0 px-4 max-w-4xl">
        <div>
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
