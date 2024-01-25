import React from 'react';
import Link from 'next/link';

import Layout from 'components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="main common">
        <section className="main__section">
          <h1 className="main__title">404 - Not Found</h1>
          <div className="main__description">
            The page you are looking for does not exist.{' '}
            <Link href="/">Go home</Link>.
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
