import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { crukTheme, GlobalStyle } from "@cruk/cruk-react-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "../components/Layout";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={crukTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default MyApp;
