import { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot } from "recoil";
import '@aws-amplify/ui-react/styles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App
