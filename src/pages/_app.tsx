import { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot } from 'recoil';
import Amplify from 'aws-amplify'

import { ThemeProvider } from '@mui/material/styles';
import lightTheme from "../components/Theme"
import CssBaseline from '@mui/material/CssBaseline';

import {Authenticator} from '@aws-amplify/ui-react';
import awsExports from 'aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Authenticator.Provider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Authenticator.Provider>
  </ThemeProvider>
)

export default App
