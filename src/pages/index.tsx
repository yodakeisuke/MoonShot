import type { NextPage } from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "./Layout";
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import lightTheme from "../components/Theme"

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RecoilRoot>
        <Layout title="Moon shot" />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default Home
