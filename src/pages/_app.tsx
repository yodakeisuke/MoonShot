import { AppProps } from 'next/app'
import React from 'react'
import Amplify from 'aws-amplify'

import { RecoilRoot } from "recoil";
import {Authenticator} from '@aws-amplify/ui-react';

import awsExports from "src/aws-exports";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

const App = ({ Component, pageProps }: AppProps) => (
  <Authenticator.Provider>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </Authenticator.Provider>
)

export default App
