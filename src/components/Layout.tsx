import Head from 'next/head';
import React from 'react';
import { ReactNode } from 'react';
import AppBar from './header/Header';
import Box from '@mui/material/Box';
import Footer from './footer/Footer';

type Props = {
  title: string
  children: ReactNode
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
        <header>
          <AppBar />
        </header>
        <main>
          <Box sx={{
            "> *": {mx: 'auto', width: '85%',  mt: 3}
            }}>
            {children}
          </Box>
        </main>
        <footer>
          <Footer />
        </footer>
    </React.Fragment>
  )
}

export default Layout
