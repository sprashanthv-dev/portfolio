import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from 'components/Layout';
import Intro from '../components/Intro/Intro';
import WorkEx from '../components/WorkEx/WorkEx';
import Education from '../components/Education/Education';

// TODO: Move this config to a separate file
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const IndexPage = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <section className="my-8 mx-auto">
          <Intro />
        </section>
        <section className="work_ex">
          <WorkEx />
        </section>
        <section className="education">
          <Education />
        </section>
      </QueryClientProvider>
    </Layout>
  );
};

export default IndexPage;
