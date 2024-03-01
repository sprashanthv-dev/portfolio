import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from 'components/Layout';
import About from 'components/About/About';
import Intro from '../components/Intro/Intro';

import WorkEx from '../components/WorkEx/WorkEx';
import Education from "../components/Education/Education";

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
        <section className="my-4 md:my-0 mx-auto">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience" className="work_ex">
          <WorkEx />
        </section>
      </QueryClientProvider>
    </Layout>
  );
};

export default IndexPage;
