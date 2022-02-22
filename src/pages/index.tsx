import type { NextPage } from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from "recoil";
import Layout from "./Layout";
import lightTheme from "./Theme"

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
