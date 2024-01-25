import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutProps } from '../../interfaces';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet title="Portfolio" />
      <div className="page-container">
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
