import Head from 'next/head';
import React from 'react';
import { ReactNode } from 'react';
import AppBar from '../components/viewModel/Header';
import Stepper from './stepToAchieve/StepperOverall';
import Box from '@mui/material/Box';
import Footer from '../components/viewModel/Footer';

type Props = {
  title: string
  children?: ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
        <header>
          <AppBar />
        </header>
        <main>
          <Box sx={{
            "> *": {mx: 'auto', width: '85%',  mt: 3}
            }}>
            <Stepper />
          </Box>
        </main>
        <footer>
          <Footer />
        </footer>
    </React.Fragment>
  )
}

export default Layout
