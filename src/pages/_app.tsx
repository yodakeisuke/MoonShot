import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import Layout from "../components/templates/Layout";
import lightTheme from "../components/templates/Theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RecoilRoot>
        <Layout title="Moon shot"  >
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp
