import { AppProps } from 'next/app'
import React from 'react'


import { RecoilRoot } from "recoil";


const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App
