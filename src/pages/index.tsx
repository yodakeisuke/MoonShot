import type { NextPage } from 'next'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from "recoil";
import Layout from "../components/templates/Layout";
import lightTheme from "../components/templates/Theme"

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
