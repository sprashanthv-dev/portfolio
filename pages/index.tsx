import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from 'components/Layout';
import Profile from '../components/Profile/Profile';
import WorkEx from "../components/WorkEx/WorkEx";
import Education from "../components/Education/Education";

// TODO: Move this config to a separate file
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})


const IndexPage = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <section className="main__section">
          <Profile/>
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
