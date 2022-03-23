import type { NextPage } from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "./Layout";
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import lightTheme from "../components/Theme"
import StepperOverall from './stepsToAchieve/StepperOverall';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RecoilRoot>
        <Layout title="Moon shot">
          <StepperOverall />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default Home
