import type { NextPage } from 'next'

import Layout from "../components/Layout";
import React from 'react';

import StepperOverall from './stepsToAchieve/StepperOverall';

const Home: NextPage = () => {
  return (
    <Layout title="Moon shot">
      <StepperOverall />
    </Layout>
  )
}

export default Home
