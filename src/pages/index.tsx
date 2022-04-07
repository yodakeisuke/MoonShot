import React from 'react';
import type { NextPage } from 'next';

import Layout from 'components/Layout';

import StepperOverall from 'pages/stepsToAchieve/StepperOverall';

const Home: NextPage = () => {
  return (
    <Layout title="Moon shot">
      <StepperOverall />
    </Layout>
  );
};

export default Home;
