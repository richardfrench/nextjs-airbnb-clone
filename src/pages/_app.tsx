import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { crukTheme, GlobalStyle } from "@cruk/cruk-react-components";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={crukTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
