import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import lightTheme from "./Theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Layout title="Moon shot"  >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
